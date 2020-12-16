import {DADOS_CRIPTOGRAFAR} from '../config/cipherConfig'

const crypto = require("crypto");
crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);

export function criptografar(senha:string) {
  const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
  cipher.update(senha);
  return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

export function descriptografar(senha:string) {
  const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
  decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
  return decipher.final();
};
