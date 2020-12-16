export interface createSelectorHook {
  users: {
    nome: string;
    email: string;
    senha: string;
    create: boolean;
    logged: boolean;
    signed: boolean;
    statemenu: boolean;
  };
}

export interface createSelectorHookConfig {
  usersConfig: {
    statemenu: any,
  };
}

export interface action {
  type: string;
  payload: {
    nome: string;
    email: string;
    senha: string;
  };
  usersConfig: {
    statemenu: boolean,
  };
}
