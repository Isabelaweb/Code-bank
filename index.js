import { Cliente } from "./Clientes.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contas = [];

const adicionarItensLocalStorage = (dados) => {
    localStorage.setItem("contas", JSON.stringify(dados))
}

const $formulario = document.querySelector(".formulario");



$formulario.addEventListener("submit", (recebeEvento) => {
    recebeEvento.preventDefault();
    const nome = recebeEvento.target.nomeCompleto.value;
    const cpf = recebeEvento.target.cpf.value;
    const agencia = recebeEvento.target.agencia.value;
    const valorDeposito = +recebeEvento.target.depositar.value;
    const conta = +recebeEvento.target.conta.value;

    const novoCliente = new Cliente(nome, cpf);
    // novoCliente.nomeCompleto = nome;
    // novoCliente.cpf = cpf;

    const novacontaCorrente = new ContaCorrente(agencia, conta, novoCliente, valorDeposito);
    // novacontaCorrente.agencia = agencia;
    // novacontaCorrente.cliente = novoCliente;
    // novacontaCorrente.depositar(valorDeposito);
    // // const valorSacado = novacontaCorrente.sacar(10);

    recebeEvento.target.nomeCompleto.value = "";
    recebeEvento.target.cpf.value = "";
    recebeEvento.target.rg.value = "";

    contas.push(novacontaCorrente)
    adicionarItensLocalStorage(contas)

    //   clientes.push(novoCliente, novacontaCorrente);

    console.log(contas);
});