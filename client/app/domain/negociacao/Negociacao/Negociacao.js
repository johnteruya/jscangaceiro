class Negociacao{
    constructor(data, quantidade, valor){
        //cada parametro recebido será atribuido as propriedades da classe
        this.data = data;
        this. quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume(){
        return this.quantidade * this.valor;
    }
}