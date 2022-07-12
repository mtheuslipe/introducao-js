const alunos=[
    {
        nome: 'Ana',
        nota: 8,
        turma: '1B'
    },
    {
        nome: 'Luiz',
        nota: 6,
        turma: '1B'
    },
    {
        nome: 'Lotto',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Luiza',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Danilo',
        nota: 4,
        turma: '1B'
    }
];

function aprova(arr,media){
    let aprovados=[];

    for(let i=0; i<arr.length; i++){
        const {nota, nome} = arr[i];
        if(nota>=media){
            aprovados.push(nome);
        };
    }
    return aprovados;
}
console.log(aprova(alunos,5));