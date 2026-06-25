import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PresencaService } from 'src/app/services/presenca.service';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';

@Component({
  selector: 'app-presenca',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
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
      lider: [null, Validators.required]        // Receberá o objeto/ID do líder selecionado
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
      // Como o formColaborador.value agora envia { data, colaborador, operacao },
      // ele encaixa perfeitamente no que o seu "RegistroDiaria.java" espera receber!
      this.presencaService.salvarPresencaColaborador(this.formColaborador.value).subscribe({
        next: (resposta: any) => {
          console.log('Diaria do colaborador salva com sucesso!', resposta);
          this.formColaborador.reset();
        },
        error: (erro: any) => console.error('Erro ao salvar colaborador', erro)
      });
    }
  }

  salvarLider() {
    if (this.formLider.valid) {
      this.presencaService.salvarPresencaLider(this.formLider.value).subscribe({
        next: (resposta: any) => {
          console.log('Diaria do líder salva com sucesso!', resposta);
          this.formLider.reset();
        },
        error: (erro: any) => console.error('Erro ao salvar líder', erro)
      });
    }
  }
}