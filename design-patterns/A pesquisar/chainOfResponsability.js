class Suporte {
    constructor(proximo = null){
        this.proximo = proximo
    }
    //quando não é passado nenhum parametro de qual classe será a próxima, por padrão se diz que não possui
    //o padrão é utilizado na classe que será a ultima a receber
    processarReclamação(reclamacao){
        if(this.proximo){
            this.proximo.processarReclamação(reclamacao);
        }
    }
    //este metodo será modificado nas classes filhos, porém ainda será acessado via o elemento super,
    //neste caso ele apenas fará com que caso veja que o nivel da reclamação seja maior do que o suporte
    //chamado, ele ira chamar o metodo da classe pai e passará a responsabilidade para a proxima classe
}

class Atendente extends Suporte{
    processarReclamação(reclamacao){
        if(reclamacao.nivel <= 1){
            console.log("Atendente: estou processando sua reclamação")
            //se o nivel da reclamação foi 1 ou menor o suporte sera feito pelo atendente
        }else{
            super.processarReclamação(reclamacao);
            //se o nivel da reclamação for maior doq o necessário para o atendente fazer o suporte, chama o
            //metodo do pai via super e passa a RESPONSABILIDADE para a proxima classe
        }
    }
}

class Gerente extends Suporte{
    processarReclamação(reclamacao){
        if(reclamacao.nivel <= 2){
            console.log("Gerente: estou processando sua reclamação");
            //a ideia é a mesma e seguira, a unica coisa mudando sendo a condição do nivel da reclamação,
            //se o nivel da reclamação fosse 1 ele pararia no atendente, logo não há problema em dizer que
            //a condição é ser menor ou igual a 2
        }else{
            super.processarReclamação(reclamacao);
        }
    }
}

class Diretor extends Suporte{
    processarReclamação(reclamacao){
        if(reclamacao.nivel <= 3){
            console.log("Diretor: estou processando sua reclamação");
        }else{
            console.log('O nivel de reclamação é muito alto')
            //como não existe um nivel maior doq o do diretor não tem como continuar, porém caso no futuro
            //seja adicionado um nivel maior, já esta implementado
        }
    }
}

const diretor = new Diretor();
const gerente = new Gerente(diretor);
//é passado o parametro diretor para que no construtor do gerente seja especificado que o diretor é o próximo
//a ser chamado caso o nivel da reclamação seja maior do que o do diretor
const atendente = new Atendente(gerente);
//mesma ideia
const reclamacao = {nivel : 2}
//se cria a reclamação e o nivel dela, que será acessado via reclamacao.nivel (neste caso retornando 2)
atendente.processarReclamação(reclamacao)
//independente do nivel se começa com o atendente, a troca de responsabilidade será feita automaticamente no código