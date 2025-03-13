class SistemaDeNotificacao {
    #observadores
    constructor(){
        this.#observadores = [];
    }
    addObservador(observador){
        this.#observadores.push(observador);
    }
    removeObservador(observador){
        this.#observadores = this.#observadores.filter((item) => item.nome != observador.nome);
    }
    notificar(dados){
        this.#observadores.forEach(observador => observador.update(dados));
    }
}

class Observador {
    constructor(nome){
        this.nome = nome;
    }
    update(mensagem){
        console.log(`O usuário ${this.nome} recebeu a notificação ${mensagem}`);
    }
}

const sistema_notificacao = new SistemaDeNotificacao();
const usuario1 = new Observador('Ramon');
const usuario2 = new Observador('Joao');
const usuario3 = new Observador('Mateus');

sistema_notificacao.addObservador(usuario1);
sistema_notificacao.addObservador(usuario2);

sistema_notificacao.notificar('Nova mensagem');

sistema_notificacao.removeObservador(usuario1);

sistema_notificacao.notificar('Outra nova mensagem');