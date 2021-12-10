import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    static numeroDeClientes = 0

    get saldo() {
        return this.saldo
    }

    get cliente() {
        return this.cliente
    }


    constructor(agencia, conta, cliente, saldo = 0) {
        super(agencia, conta, cliente, saldo = 0)
        ContaCorrente.numeroDeClientes += 1;
    }
}