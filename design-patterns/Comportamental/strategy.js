class EstrategiaEnvio {
    calcularCusto(custo){
        throw new Error('Método de envio inexistente ou inválido');
    }
}

class EstrategiaPremium {
    calcularCusto(custo){
        return custo*1.2
    }
}

class EstrategiaPlus {
    calcularCusto(custo){
        return custo*1.8
    }
}

class Pedido {
    constructor(custo,estrategia){
        this.custo = custo;
        this.estrategia = estrategia;
    }
    getCustoFinal(){
        return this.estrategia.calcularCusto(this.custo);
    }
}
const pedido1 = new Pedido(50, new EstrategiaPlus());
console.log(pedido1.getCustoFinal())
const pedido2 = new Pedido(200, new EstrategiaPremium());
console.log(pedido2.getCustoFinal())