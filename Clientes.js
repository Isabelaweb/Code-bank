export class Cliente { // Classe Cliente cria um molde para ser usado na criação de novos clientes e evitar a repetição de codigos
    nomeCompleto;
    cpf;

    constructor(nome, cpf) {
        this.nomeCompleto = nome;
        this.cpf = cpf;
    }

};