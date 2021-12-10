import { Conta } from "./conta";

const $formularioTransferencia = document.querySelector(".formularioTransferencia");
const $formularioDeposito = document.querySelector(".formulario-deposito")
const $formularioSaques = document.querySelector(".formulario-saques");

$formularioDeposito.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
    const deposito = recebeEvento.target.depositar.value
    Conta.depositar(deposito)
});

$formularioSaques.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
    const saques = recebeEvento.target.saques.value
    Conta.sacar(saques)
});


$formularioTransferencia.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
    const saque = recebeEvento.target.saques.value
    const cpfDoPagante = recebeEvento.target.cpfPagante.value;
    const valorDeTransferencia = +recebeEvento.target.valorTransferencia.value;
    const cpfDoRecebedor = recebeEvento.target.cpfRecebedor.value;

    // transferencia(cpfDoPagante, cpfDoRecebedor, valorDeTransferencia);

    const contaClientePagante = contas.find(function(conta) {
        return conta.cliente.cpf === cpfDoPagante
    })

    const contaClienteRecebedor = contas.find(function(conta) {
        return conta.cliente.cpf === cpfDoRecebedor
    })

    Conta.transferencia(contaClientePagante, contaClienteRecebedor, valorDeTransferencia);


    recebeEvento.target.cpfPagante.value = "";
    recebeEvento.target.valorTransferencia.value = "";
    recebeEvento.target.cpfRecebedor.value = "";


});