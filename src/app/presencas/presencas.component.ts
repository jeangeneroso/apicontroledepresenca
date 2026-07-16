import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PresencaService } from 'src/app/services/presenca.service';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { Router } from '@angular/router';

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
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formColaborador = this.fb.group({
      data: ['', Validators.required],
      colaborador: ['', Validators.required],
      operacao: ['', Validators.required]
    });

    // 2. Inicializando o formulário do Líder
    this.formLider = this.fb.group({
      data: ['', Validators.required],
      lider: ['', Validators.required],   // Receberá o objeto/ID do líder selecionado
      operacao: ['', Validators.required]
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
    if (this.formColaborador.valid) {
      const dadosForm = this.formColaborador.value;
      const dadosFormatados = {
        data: dadosForm.data,
        colaborador: {
          id: Number(dadosForm.colaborador)
        },
        operacao: {
          id: dadosForm.operacao && dadosForm.operacao.id ? Number(dadosForm.operacao.id) : null
        }
      };

      this.presencaService.salvarPresencaColaborador(dadosFormatados).subscribe({
        next: () => {
          this.formColaborador.reset();
          this.onSucess("voltar");
        },
        error: () => this.onError()
      });
    }
  }

  salvarLider() {
    if (this.formLider.valid) {
      const dadosForm = this.formLider.value;
      const dadosFormatados = {
        data: dadosForm.data,
        lider: {
          id: Number(dadosForm.lider)
        },
        operacao: {
          id: dadosForm.operacao && dadosForm.operacao.id ? Number(dadosForm.operacao.id) : null
        }
      };

      console.log('JSON corrigido indo para o Java:', dadosFormatados);

      this.presencaService.salvarPresencaLider(dadosFormatados).subscribe({
        next: (resposta: any) => {
          console.log('Diaria do líder salva com sucesso!', resposta);
          this.formLider.reset();
          this.onSucess("voltar");
        },
        error: (error) => this.onError()
      });
    }
  }

  compararObjetos(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  private onSucess(acao: 'voltar' | 'permanecer' = 'permanecer') {

    this.snackBar.open(' Diaria cadastrada com sucesso! ', ' Fechar ', {
      duration: 2500
    });

    if (acao === 'voltar') {
    this.onCancel();
    }
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar a diaria ', ' Fechar ', {
      duration: 2500
    });
  }

  onCancel() {
    this.router.navigate(['/diarias']);
  }
}