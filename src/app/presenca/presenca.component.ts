import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresencaService } from 'src/app/services/presenca.service'; // <-- Caminho absoluto sem pontos

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  abaAtiva: string = 'colaborador';
  
  // Declarando os formulários como FormGroup
  formColaborador!: FormGroup;
  formLider!: FormGroup;

  // Injetando o Service e o FormBuilder através do construtor
  constructor(
    private presencaService: PresencaService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Inicializando os campos do formulário do Colaborador
    this.formColaborador = this.fb.group({
      // Coloque aqui os campos que o colaborador preenche, por exemplo:
      data: ['', Validators.required],
      justificativa: ['']
    });

    // Inicializando os campos do formulário do Líder
    this.formLider = this.fb.group({
      // Coloque aqui os campos específicos do líder, por exemplo:
      data: ['', Validators.required],
      setor: ['', Validators.required],
      observacao: ['']
    });
  }

  trocarAba(aba: string) {
    this.abaAtiva = aba;
  }

  salvarColaborador() {
    if (this.formColaborador.valid) {
      this.presencaService.salvarPresencaColaborador(this.formColaborador.value).subscribe({
        next: (resposta: any) => {
          console.log('Presença do colaborador salva com sucesso!', resposta);
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
          console.log('Presença do líder salva com sucesso!', resposta);
          this.formLider.reset();
        },
        error: (erro: any) => console.error('Erro ao salvar líder', erro)
      });
    }
  }
}