export interface Colaborador {
  id?: number | string;
  nomeColaborador: string;
  rgColaborador: string;
  cpfColaborador: string;
  chavePix: string;
  valorDiaria: number | string;   // Ex: 130.00
  valorHoraExtra: number | string; // Ex: 12.00
  
}