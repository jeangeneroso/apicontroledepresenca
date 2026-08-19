export enum StatusAprovacao {
  PENDENTE = 'PENDENTE',
  APROVADO = 'APROVADO',
  REJEITADO = 'REJEITADO'
}

export interface Diaria {
  id?: number;
  dataDiaria?: string; // Mantendo o padrão do atributo Java (dataDiaria)
  colaborador?: { id: number; nome: string };
  lider?: { id: number; nome: string };
  operacao: { id: number; nome: string };
  status: StatusAprovacao;
}