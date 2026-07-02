import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PresencaService } from 'src/app/services/presenca.service';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-presenca',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './presencas.component.html',
  styleUrls: ['./presencas.component.css']
})
export class PresencaComponent implements OnInit {

  abaAtiva: string = 'colaborador';

  formColaborador!: FormGroup;
  formLider!: FormGroup;

  // Listas que vão alimentar os <select> no HTML
  listaDeColaboradores: any[] = [];
  listaDeOperacoes: any[] = [];
  listaDeLideres: any[] = [];

  constructor(
    private presencaService: PresencaService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // 1. Inicializando o formulário do Colaborador com os campos corretos
    this.formColaborador = this.fb.group({
      data: ['', Validators.required],
      colaborador: [null, Validators.required], // Receberá o objeto/ID do colaborador selecionado
      operacao: [null, Validators.required]     // Receberá o objeto/ID da operação selecionada
    });

    // 2. Inicializando o formulário do Líder
    this.formLider = this.fb.group({
      data: ['', Validators.required],
      lider: [null, Validators.required],   // Receberá o objeto/ID do líder selecionado
      operacao: [null, Validators.required]
    });

    // 3. Chamar os métodos para carregar os dados assim que a tela abrir
    this.carregarDadosIniciais();
  }

  // Método fictício (você deve implementar os GETs no seu presencaService)
  carregarDadosIniciais() {
    // Exemplo de como você vai buscar os dados do banco para preencher os <selects>
    /* this.presencaService.buscarColaboradores().subscribe(dados => this.listaDeColaboradores = dados);
    this.presencaService.buscarOperacoes().subscribe(dados => this.listaDeOperacoes = dados);
    this.presencaService.buscarLideres().subscribe(dados => this.listaDeLideres = dados);
    */

    // Apenas para testes visuais enquanto não puxa do banco, você pode mockar assim:
    this.listaDeColaboradores = [{ id: 1, nome: 'João Silva' }, { id: 2, nome: 'Maria Souza' }];
    this.listaDeOperacoes = [{ id: 1, nome: 'Operação Logística' }, { id: 2, nome: 'Operação Produção' }];
    this.listaDeLideres = [{ id: 1, nome: 'Carlos Gerente' }, { id: 2, nome: 'Ana Supervisora' }];


  }

  trocarAba(aba: string) {
    this.abaAtiva = aba;
  }

  salvarColaborador() {
    const dadosForm = this.formColaborador.value;
    const dadosFormatados = {
      data: dadosForm.data, // mapeia para o seu getDia/setDia
      colaborador: { id: dadosForm.colaborador }, // vira o objeto @ManyToOne
      operacao: { id: dadosForm.operacao } // vira o objeto @ManyToOne
    };

    this.presencaService.salvarPresencaColaborador(this.formColaborador.value).subscribe({
      next: (colaborador) => {
        console.log('Diaria do colaborador salva com sucesso!', colaborador);
        this.formColaborador.reset();
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  /* salvarLider() {
    const dadosForm = this.formLider.value;

    const dadosFormatados = {
      data: dadosForm.data,
      lider: { id: dadosForm.lider.id },
      operacao: { id: dadosForm.operacao.id }
    };

    // CORREÇÃO: Passar 'dadosFormatados' em vez de 'this.formLider.value'
    this.presencaService.salvarPresencaLider(dadosFormatados).subscribe({
      next: (resposta: any) => {
        console.log('Diaria do líder salva com sucesso!', resposta);
        this.formLider.reset();
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  } */

  salvarLider() {
    const dadosForm = this.formLider.value;

    const dadosFormatados = {
      data: dadosForm.data,
      lider: { id: dadosForm.lider.id },
      operacao: { id: dadosForm.operacao.id }
    };

    // VEJA SE ESTÁ ASSIM: Você DEVE passar 'dadosFormatados' aqui dentro!
    this.presencaService.salvarPresencaLider(dadosFormatados).subscribe({
      next: (resposta: any) => {
        console.log('Diaria do líder salva com sucesso!', resposta);
        this.formLider.reset();
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  compararObjetos(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  private onSucess() {

    this.snackBar.open(' Colaborador cadastrado com sucesso! ', ' Fechar ', {
      duration: 5000
    });
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar o colaborador ', ' Fechar ', {
      duration: 5000
    });
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }
}