export interface createSelectorHook {
  datetime: {
    id: string;
    nome: string;
    entrada: string;
    almoco: boolean;
    saida: boolean;
    length: number;
  };
  lenght: number;
}

export interface action {
  type: string;
  payload: {
    id: string;
    date: Date;
    nome: string;
    entrada: string;
    almoco: string;
    saida: string;
  };
}
