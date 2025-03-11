class FerramentaPagamentoAntiga {
    processoPagamento(quantia){
        console.log('vai fazer o pagamento da ', quantia)
    }
}

class novaVersaoAPIPagamento {
    pagar(detalhamento_pagamento){
        console.log('Fazer o pagamento no novo sistema', detalhamento_pagamento.quantia)
    }
}

class AdaptorPagamento {
    constructor(novaVersaoAPIPagamento){
        this.novaVersaoAPIPagamento = novaVersaoAPIPagamento
    }
    processoPagamento(quantia) {
        this.novaVersaoAPIPagamento.pagar({valor: quantia})
    }
}

const novoPagamento = new novaVersaoAPIPagamento();
const adaptador = new AdaptorPagamento();

adaptador.processoPagamento(100)