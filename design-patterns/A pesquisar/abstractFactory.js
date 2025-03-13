class Personagem {
    atacar(){
        throw new Error('Implementar o metodo');
    }
}
//Foi criado uma fábrica abstrata de personagens que vem com um metodo padrão que será implementado

class Guerreiro extends Personagem{
    atacar(){
        console.log('Guerreiro ataca o inimigo com uma espada');
    }
}
//Adiciono uma fábrica concreta de um personagem, que neste caso será o guerreiro, que herda o metodo ataca e o implementa

class Mago extends Personagem{
    atacar(){
        console.log('Mago ataca o inimigo com um feitiço');
    }
}

class Arqueiro extends Personagem{
    atacar(){
        console.log('Arqueiro ataca o inimigo com um arco');
    }
}

class FabricaPersonagem {
    criarPersonagem(){
        throw new Error('Implementar o metodo em fabricas concretas');
    }
}

//Aqui se cria uma fábrica abstrata para a criação dos personagens, que recebe o metodo de criação que sera implementado depois

class FabricaGuerreiro extends FabricaPersonagem{
    criarPersonagem(){
        return new Guerreiro();
    }
}
//Adiciono uma fábrica concreta de guerreiros que modifica o metodo anteriormente criado para criar especificamente um novo guerreiro


class FabricaArqueiro extends FabricaPersonagem{
    criarPersonagem(){
        return new Arqueiro();
    }
}

class FabricaMago extends FabricaPersonagem{
    criarPersonagem(){
        return new Mago();
    }
}

const criarGuerreiro = new FabricaGuerreiro();
const criarArqueiro = new FabricaArqueiro();
const criarMago = new FabricaMago();

//Se inicializa as fábricas para especificar qual personagem será criado

const personagem1 = criadorPersonagem(criarMago);
const personagem2 = criadorPersonagem(criarArqueiro);
const personagem3 = criadorPersonagem(criarGuerreiro);

//Salva o retorno da função criadorPersonagem que tem como parametro a fábrica de qual personagem quero que seja criado

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();

//Faz com que o novo personagem utilize de seu metodo herdado da classe Personagem dizendo como o personagem vai atacar

function criadorPersonagem(personagemEscolhido){
    const personagem = personagemEscolhido.criarPersonagem();
    return personagem;
}
//Função usada para criar os personagens, que recebe como parametro a fábrica do personagem escolhido,
//e cria um novo personagem com o método herdado da classe FabricaPersonagem
