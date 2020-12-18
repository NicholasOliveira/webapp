export interface createSelectorHook {
  users: {
    nome: string;
    email: string;
    senha: string;
    create: boolean;
    logged: boolean;
    signed: boolean;
    statemenu: boolean;
    load:boolean;
  };
}

export interface createSelectorHookConfig {
  usersConfig: {
    statemenu: any,
  };
}

export interface action {
  load:boolean;
  type: string;
  payload: {
    nome: string;
    email: string;
    senha: string;
    status: number;
    load: boolean;
  };
  state: {
    nome: string;
    email: string;
    senha: string;
    status: number;
    load: boolean;
  };
  usersConfig: {
    statemenu: boolean,
  };
}

export interface actionSaga {
  type:{
    payload: {
    nome: string;
    email: string;
    senha: string;
  }};
  usersConfig: {
    statemenu: boolean,
  };
}
