class contaBancaria{
    constructor(agencia,numero, tipo,  ){
        this.tipo=tipo;
        this.agencia= agencia;
        this.numero= numero;
        this._saldo=0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(val){
        this._saldo=val;
    }
    sacar(num){
        if(num > this._saldo ) return "Operação negada";

        this._saldo= this._saldo - num;
        return `Saque efetuado! Seu saldo agora é: ${ this._saldo}`;
    }
    depositar(num){
        this._saldo = this.saldo + num
        return `Depósito feito com sucesso! Seu saldo agpra é: ${this.saldo}`;
    }
}
class contaCorrente extends contaBancaria {
    constructor(agencia,numero, cartao){
        super(agencia,numero,);
        this.tipo = 'corrente';
        this._cartao=cartao;
    }
    get cartao(){
        return this._cartao;
    }
    set cartao(val){
        this._cartao = val;
    }
}
class contaPoupanca extends contaBancaria {
    constructor(agencia,numero, ){
        super(agencia,numero, );
        this.tipo= 'poupança';
    }
}
class contaUni extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='Conta universitária';
    }
    sacar(val){
        if(val > 500) return "Saque Cancelado!";
        this._saldo=this._saldo-val;
        return `Saque realizado! Seu saldo agora é ${this._saldo}`;
    }
    
}