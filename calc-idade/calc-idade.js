function calcIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade} + ${anos} `
}

const pessoa1 ={
    nome: 'Luiza',
    idade: 17
}
const pessoa2={
    nome:'Matheus',
    idade: 18
}
console.log(calcIdade.call(pessoa1, 2));
console.log(calcIdade.apply(pessoa2, [3]));