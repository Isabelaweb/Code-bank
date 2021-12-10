import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, conta, cliente, saldo = 0) {
        super(agencia, conta, cliente, saldo = 0)
    }
}