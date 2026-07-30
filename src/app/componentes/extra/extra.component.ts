import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { Router } from '@angular/router';
import { ExtraService } from '@services/extra.service';
import { Colaborador } from '../../models/colaborador.model';
import { Operacao } from '../../models/operacao.model';
import { Lider } from '../../models/lider.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-extra',
  imports: [
    CommonModule,
    AppMarterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent implements OnInit {

  abaAtiva: string = 'colaborador';

  formColaborador!: FormGroup;
  formLider!: FormGroup;

  // Listas que vão alimentar os <select> no HTML
    listaDeColaboradores: Colaborador[] = [];
    listaDeOperacoes: Operacao[] = [];
    listaDeLideres: (Lider | Colaborador)[] = [];
  listaDeHoras: any[] = [];

  constructor(
    private extraService: ExtraService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formColaborador = this.fb.group({
      data: ['', Validators.required],
      colaborador: ['', Validators.required],
      operacao: ['', Validators.required],
      hora: ['', Validators.required]
    });

    // 2. Inicializando o formulário do Líder
    this.formLider = this.fb.group({
      data: ['', Validators.required],
      lider: ['', Validators.required],   // Receberá o objeto/ID do líder selecionado
      operacao: ['', Validators.required],
      hora: ['', Validators.required]
    });

    this.carregarDadosIniciais();

  }


   carregarDadosIniciais(): void {
      // Busca todas as listas em paralelo antes de liberar o form
      forkJoin({
        colaboradores: this.extraService.buscarColaboradores(),
        operacoes: this.extraService.buscarOperacoes(),
        lideres: this.extraService.buscarLideres()
      }).subscribe({
        next: (dados) => {
          this.listaDeColaboradores = dados.colaboradores;
          this.listaDeOperacoes = dados.operacoes;
          this.listaDeLideres = [...dados.lideres, ...dados.colaboradores];
          this.listaDeHoras = [{ id: 1, nome: '1 hora' }, { id: 2, nome: '2 horas' }, { id: 3, nome: '3 horas' }, { id: 4, nome: '4 horas' }, { id: 5, nome: '5 horas' }];
  
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

  salvarHoraExtraColaborador() {
    if (this.formColaborador.valid) {
      const dadosForm = this.formColaborador.value;
      const dadosFormatados = {
        data: dadosForm.data,
        colaborador: {
          id: Number(dadosForm.colaborador)
        },
        operacao: {
          id: dadosForm.operacao && dadosForm.operacao.id ? Number(dadosForm.operacao.id) : null
        },
       /*  hora: {
          id: dadosForm.hora && dadosForm.hora.id ? Number(dadosForm.hora.id) : null
        } */
       hora: dadosForm.hora ? Number(String(dadosForm.hora.id || dadosForm.hora).split(':')[0]) : null
      };

      console.log('JSON corrigido indo para o Java:', dadosFormatados);

      this.extraService.salvarHoraExtraColaborador(dadosFormatados).subscribe({
        next: () => {
          this.formColaborador.reset();
          this.onSucess("voltar");
        },
        error: () => this.onError()
      });
    }
  }

  salvarHoraExtraLider() {
    if (this.formLider.valid) {
      const dadosForm = this.formLider.value;
      const dadosFormatados = {
        data: dadosForm.data,
        lider: {
          id: Number(dadosForm.lider)
        },
        operacao: {
          id: dadosForm.operacao && dadosForm.operacao.id ? Number(dadosForm.operacao.id) : null
        },
        /* hora: {
          id: dadosForm.hora && dadosForm.hora.id ? Number(dadosForm.hora.id) : null
        } */
       hora: dadosForm.hora ? Number(String(dadosForm.hora.id || dadosForm.hora).split(':')[0]) : null
      };

      console.log('JSON corrigido indo para o Java:', dadosFormatados);

      this.extraService.salvarHoraExtraLider(dadosFormatados).subscribe({
        next: (resposta: any) => {
          console.log('Hora do líder salva com sucesso!', resposta);
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

    this.snackBar.open(' Hora extra cadastrada com sucesso! ', ' Fechar ', {
      duration: 2500
    });

    if (acao === 'voltar') {
      this.onCancel();
    }
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar hora extra ', ' Fechar ', {
      duration: 2500
    });
  }

  onCancel() {
    this.router.navigate(['/diarias']);
  }


}
