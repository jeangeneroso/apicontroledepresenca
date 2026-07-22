
import { Component, inject, OnInit } from '@angular/core';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColaboradoresService } from '@services/colaboradores.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-colaboradores-form',
  standalone: true,
  imports: [
    CommonModule,
    ...AppMarterialModule
  ],
  templateUrl: './colaboradores-form.component.html',
  styleUrl: './colaboradores-form.component.css'
})
export class ColaboradoresFormComponent implements OnInit {

  // Injeção de dependências moderna com inject()
  private formBuilder = inject(FormBuilder);
  private service = inject(ColaboradoresService);
  private snackBar = inject(MatSnackBar);

  // Inicialização do formulário direto na propriedade (padrão moderno)
  form: FormGroup = this.formBuilder.group({
    nomeColaborador: [null],
    rgColaborador: [null],
    cpfColaborador: [null],
    chavePix: [null]
  });

  formLider: any;

  // Constructor removido por não ser mais necessário!

  ngOnInit(): void {
    // Se precisar carregar algo ao iniciar o componente, faça aqui
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (colaborador) => {
        console.log('Salvou com sucesso!', colaborador);
        
        // Alerta visual de sucesso
        this.snackBar.open('Colaborador salvo com sucesso!', 'Fechar', {
        });
      },
      error: (error) => {
        console.error('Erro ao salvar colaborador:', error);
        
        // Alerta visual de erro
        this.snackBar.open('Erro ao salvar colaborador. Tente novamente.', 'Fechar', {
        });
      }
    });
  }

  onCancel() {
    // Lógica para cancelar (ex: voltar para a tela anterior)
  }
}
