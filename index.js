import { Cliente } from "./Clientes.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contas = [];

const $formulario = document.querySelector(".formulario");
const $formularioTransferencia = document.querySelector(".formularioTransferencia");
const $formularioDeposito = document.querySelector(".formulario-deposito")
const $formularioSaques = document.querySelector(".formulario-saques");



$formulario.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
    const nome = recebeEvento.target.nomeCompleto.value;
    const cpf = recebeEvento.target.cpf.value;
    const rg = recebeEvento.target.rg.value;
    const agencia = recebeEvento.target.agencia.value;
    const valorDeposito = +recebeEvento.target.depositar.value;

    const novoCliente = new Cliente();
    novoCliente.nomeCompleto = nome;
    novoCliente.cpf = cpf;
    novoCliente.rg = rg;

    const novacontaCorrente = new ContaCorrente();
    novacontaCorrente.agencia = agencia;
    novacontaCorrente.cliente = novoCliente;
    novacontaCorrente.depositar(valorDeposito);
    // const valorSacado = novacontaCorrente.sacar(10);

    recebeEvento.target.nomeCompleto.value = "";
    recebeEvento.target.cpf.value = "";
    recebeEvento.target.rg.value = "";

    contas.push(novacontaCorrente)

    //   clientes.push(novoCliente, novacontaCorrente);

    console.log(contas);
});

$formularioTransferencia.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
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

    ContaCorrente.transferencia(contaClientePagante, contaClienteRecebedor, valorDeTransferencia)

    console.log(contas)

    recebeEvento.target.cpfPagante.value = "";
    recebeEvento.target.valorTransferencia.value = "";
    recebeEvento.target.cpfRecebedor.value = "";


});



// function transferencia(cpfDoPagante, cpfDoRecebedor, valorDeTransferencia) {

//     const contaClientePagante = contas.find(function(conta) {
//         return conta.cliente.cpf === cpfDoPagante
//     })

//     const contaClienteRecebedor = contas.find(function(conta) {
//         return conta.cliente.cpf === cpfDoRecebedor
//     })
//     if (contaClientePagante.saldo < valorDeTransferencia) {
//         return "Saldo insuficiente"
//     }

//     contaClientePagante.sacar(valorDeTransferencia)
//     contaClienteRecebedor.depositar(valorDeTransferencia)

//     console.log(contas)

// }