function subPreco(arr, saldoDisponivel){
    return arr.reduce(function (prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}
const lista=[
    {
        nome: 'arroz',
        preco:10,
    },
    {
        nome: 'feijão',
        preco:15,
    },
    {
        nome: 'café especial',
        preco:40,
    },
];
const saldoDisponivel=100;

console.log(subPreco(lista, saldoDisponivel));