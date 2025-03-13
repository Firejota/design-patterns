class LuzDaSala{
    ligar(){
        console.log('Ligando a luz da sala')
    }
    desligar(){
        console.log('Desligando a luz da sala')
    }
}
class Televisão{
    ligar(){
        console.log('Ligando a televisão da sala')
    }
    desligar(){
        console.log('Desligando a televisão da sala')
    }
}
class Mensagem{
    entrou(){
        console.log('Bem vindo!')
    }
    saiu(){
        console.log('Até logo')
    }
}
class SistemaDaSalaFacade{
    constructor(luz, televisao, mensagem){
        this.luz = luz;
        this.televisao = televisao;
        this.mensagem = mensagem;
    }
    entrouEmCasa(){
        this.mensagem.entrou();
        this.luz.ligar();
        this.televisao.ligar();
    }
    //Facade serve para fazer com que o usuario nao tenha que fazer tudo manualmente, utilizando do pattern facade
    //para fazer tudo isso apenas com um unico comando
    saiuDeCasa(){
        this.mensagem.saiu();
        this.luz.desligar();
        this.televisao.desligar();
    }
}

const televisao = new Televisão();
const luz = new LuzDaSala();
const mensagem = new Mensagem();
//cria cada objeto

const sistema = new SistemaDaSalaFacade(luz, televisao, mensagem);
//cria o facade passando como parametro cada objeto criado

sistema.entrouEmCasa();
console.log('\n')
sistema.saiuDeCasa();