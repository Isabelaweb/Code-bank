const $formularioTransferencia = document.querySelector(".formularioTransferencia");
const $formularioDeposito = document.querySelector(".formulario-deposito")
const $formularioSaques = document.querySelector(".formulario-saques");

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