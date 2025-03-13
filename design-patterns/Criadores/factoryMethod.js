class Notificacao {
    enviar(mensagem){
        throw new Error("O método enviar() precisa ser implementado na classe filha")
    }

}

class NotificacaoEmail extends Notificacao {
    enviar(mensagem){
        console.log(`Enviando um E-mail: ${mensagem}`)
    }
}

class NotificacaoSMS extends Notificacao {
    enviar(mensagem){
        console.log(`Enviando um Sms: ${mensagem}`)
    }
}

class FactoryNotificacao {
    static criarNotificacao(tipo){
        switch (tipo) {
            case 'email':
                return new NotificacaoEmail();
            case 'sms':
                return new NotificacaoSMS();
            default:
                throw new Error('Tipo desconhecido.')
        }
    }
}
//const notif = new NotificacaoEmail()
//notif.enviar('mensagem teste')

const notif = FactoryNotificacao.criarNotificacao('email')
notif.enviar('outra mensagem teste')