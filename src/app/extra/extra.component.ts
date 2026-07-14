import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { Router } from '@angular/router';
import { ExtraService } from '@services/extra.service';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-extra',
  imports: [
    CommonModule,
    AppMarterialModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent implements OnInit {

  abaAtiva: string = 'colaborador';

  formColaborador!: FormGroup;
  formLider!: FormGroup;

  // Listas que vão alimentar os <select> no HTML
  listaDeColaboradores: any[] = [];
  listaDeOperacoes: any[] = [];
  listaDeLideres: any[] = [];
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

  carregarDadosIniciais() {

    this.listaDeColaboradores = [{ id: 1, nome: 'João Silva' }, { id: 2, nome: 'Maria Souza' }];
    this.listaDeOperacoes = [{ id: 1, nome: 'Operação Logística' }, { id: 2, nome: 'Operação Produção' }];
    this.listaDeLideres = [{ id: 1, nome: 'Carlos Gerente' }, { id: 2, nome: 'Ana Supervisora' }];

    this.listaDeHoras = [{ id: 1, nome: '1 hora' }, { id: 2, nome: '2 horas' }];

  }

   trocarAba(aba: string) {
    this.abaAtiva = aba;
  }

  salvarHoraExtraColaborador (){

  }

  salvarHoraExtraLider () {

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
      duration: 3500
    });
    }

    onCancel() {
    this.router.navigate(['/extra']);
  }

}
