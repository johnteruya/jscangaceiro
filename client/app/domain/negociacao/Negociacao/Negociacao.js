class Negociacao{
    constructor(_data, _quantidade, _valor){
        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    //criando o método Volume
    get volume(){
        return this._quantidade * this._valor;
    }

    //criando o método Data
    get data(){
        return new Date(this._data.getTime());
    }

    //criando o método Quantidade
    get quantidade(){
        return this._quantidade;
    }

    //criando o método Valor
    get valor(){
        return this._valor;
    }
}