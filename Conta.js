import { Cliente } from "./Clientes.js";

export class Conta {
    static numeroDeClientes = 0

    get saldo() {
        return this.saldo
    }

    set cliente(valueCliente) {
        if (valueCliente instanceof Cliente) {
            this._cliente = valueCliente
        }
    }

    get cliente() {
        return this._cliente
    }


    constructor(agencia, conta, cliente, saldo = 0) {
        this.agencia = agencia;
        this.conta = conta;
        this._cliente = cliente;
        this._saldo = saldo;
        Conta.numeroDeClientes += 1;
    }

    sacar(valor) {
        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
            return valorSacado;

        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this.saldo += valor
    }

    static transferencia(contaClientePagante, contaClienteRecebedor, valorDeTransferencia) {
        if (contaClientePagante.saldo < valorDeTransferencia) {
            return "Saldo insuficiente"
        }

        contaClientePagante.sacar(valorDeTransferencia)
        contaClienteRecebedor.depositar(valorDeTransferencia)
    }

}