import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PresencaService } from '../../services/presenca.service';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { Router } from '@angular/router';
import { Colaborador } from '../../models/colaborador.model';
import { Lider } from '../../models/lider.model';
import { Operacao } from '../../models/operacao.model';
import { forkJoin } from 'rxjs';

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
  listaDeColaboradores: Colaborador[] = [];
  listaDeOperacoes: Operacao[] = [];
  listaDeLideres: (Lider | Colaborador)[] = [];

  constructor(
    private presencaService: PresencaService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Inicializando o formulário do Colaborador
    this.formColaborador = this.fb.group({
      data: ['', Validators.required],
      colaborador: ['', Validators.required],
      operacao: ['', Validators.required]
    });

    // Inicializando o formulário do Líder
    this.formLider = this.fb.group({
      data: ['', Validators.required],
      lider: ['', Validators.required],   // Receberá o objeto/ID do líder selecionado
      operacao: ['', Validators.required]
    });

    // 3. Chamar os métodos para carregar os dados assim que a tela abrir
    this.carregarDadosIniciais();
  }


  /*   carregarDadosIniciais() {
    this.presencaService.buscarColaboradores().subscribe({
      next: (dados) => this.listaDeColaboradores = dados,
      error: (err) => console.error('Erro ao buscar colaboradores:', err)
    });
  
    this.presencaService.buscarOperacoes().subscribe({
      next: (dados) => this.listaDeOperacoes = dados,
      error: (err) => console.error('Erro ao buscar operações:', err)
    });
  
    this.presencaService.buscarLideres().subscribe({
      next: (dados) => this.listaDeLideres = dados,
      error: (err) => console.error('Erro ao buscar líderes:', err)
    });
  } */

  carregarDadosIniciais(): void {
    // Busca todas as listas em paralelo antes de liberar o form
    forkJoin({
      colaboradores: this.presencaService.buscarColaboradores(),
      operacoes: this.presencaService.buscarOperacoes(),
      lideres: this.presencaService.buscarLideres()
    }).subscribe({
      next: (dados) => {
        this.listaDeColaboradores = dados.colaboradores;
        this.listaDeOperacoes = dados.operacoes;
        this.listaDeLideres = [...dados.lideres, ...dados.colaboradores];

        console.log('Líderes + Colaboradores unificados:', this.listaDeLideres);
        console.log('Operações carregadas no componente:', this.listaDeOperacoes);
      },
      error: (err) => {
        console.error('Erro ao carregar listas iniciais:', err);
        this.snackBar.open('Erro ao carregar dados do formulário', 'Fechar', { duration: 3000 });
      }
    });
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