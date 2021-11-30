export class ContaCorrente {
    agencia;
    conta;
    cliente;
    saldo = 0;

    get saldo() {
        return this.saldo
    }


    constructor(agencia, conta, cliente, saldo = 0) {
        this.agencia = agencia;
        this.conta = conta;
        this.cliente = cliente;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return valor

        }
    }
    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this.saldo += valor
    }

    // transferir(valor, conta) {
    //     const valorSacado = this.sacar(valor);
    //     conta.depositar(valorSacado)
    // }

    static transferencia(contaClientePagante, contaClienteRecebedor, valorDeTransferencia) {
        if (contaClientePagante.saldo < valorDeTransferencia) {
            return "Saldo insuficiente"
        }

        contaClientePagante.sacar(valorDeTransferencia)
        contaClienteRecebedor.depositar(valorDeTransferencia)
    }

} {

}