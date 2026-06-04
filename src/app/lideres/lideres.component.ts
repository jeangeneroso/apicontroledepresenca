import { Component } from '@angular/core';
import { Lider } from '../models/lider.model';
import { LideresService } from '../services/lideres.service';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent {

  lideres: Lider[] = [];

  displayedColumns: string[] = [
    'id',
    'nomeLider',
    'rgLider',
    'cpfLider',
    'chavePix',
    'valorDiaria',
    'valorHoraExtra']

  constructor(private lideresService: LideresService) { }

  ngOnInit(): void {
    // 1. O componente carregou!
    // 2. Agora pedimos os dados para o Java
    this.carregarLideres();
  }

  carregarLideres() {
    console.log("Buscando dados no Java...");
  }

}
