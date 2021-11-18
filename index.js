import { Cliente } from "./Clientes.js"
import { contaCorrente } from "./ContaCorrente.js"

const clientes = []

const $formulario = document.querySelector(".formulario")

$formulario.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault()
    const nome = recebeEvento.target.nomeCompleto.value;
    const cpf = recebeEvento.target.cpf.value;
    const rg = recebeEvento.target.rg.value;
    const agencia = recebeEvento.target.agencia.value;


    const novoCliente = new Cliente();
    novoCliente.nomeCompleto = nome;
    novoCliente.cpf = cpf;
    novoCliente.rg = rg;

    const novacontaCorrente = new contaCorrente();
    novacontaCorrente.agencia = agencia;
    novacontaCorrente.cliente = novoCliente.nomeCompleto;
    // novacontaCorrente.depositar(100)
    // const valorSacado = novacontaCorrente.sacar(10)


    clientes.push(novoCliente, novacontaCorrente)

    recebeEvento.target.nomeCompleto.value = " ";
    recebeEvento.target.cpf.value = " ";
    recebeEvento.target.rg.value = " ";

    console.log(clientes)



})