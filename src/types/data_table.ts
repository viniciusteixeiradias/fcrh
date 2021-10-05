export type Align = 'start' | 'center' | 'end';

export interface Header {
  text: string;
  value: string;
  translate?: (value: string) => string;
  align?: Align;
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
}

export interface Items {
  recadastrar: string,
  situacao: string,
  nome: string,
  cpf: string,
  masp: string,
  admissao: string,
  dataNascimento: string,
  situacaoFuncional: string,
  orgaoExercicio: string,
  dataUltimoRecadastramento: string,
  tipoRecadastramento: string
}
