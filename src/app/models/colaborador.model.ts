export interface Colaborador {
  id?: number | string;
  nomeColaborador: string;
  rgColaborador: string;
  cpfColaborador: string;
  chavePix: string;
  valorDiariaBase: number | string;   // Ex: 130.00
  valorHoraExtraBase: number | string; // Ex: 12.00
  
}