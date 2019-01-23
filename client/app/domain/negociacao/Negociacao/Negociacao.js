class Negociacao{
    constructor(data, quantidade, valor){
        //cada parametro recebido será atribuido as propriedades da classe
        this._data = data;
        this. _quantidade = quantidade;
        this._valor = valor;
    }

    //criando o método Volume
    getVolume(){
        return this._quantidade * this._valor;
    }

    //criando o método Data
    getData(){
        return this._data;
    }

    //criando o método Quantidade
    getQuantidade(){
        return this._quantidade;
    }

    //criando o método Valor
    getValor(){
        return this._valor;
    }
}