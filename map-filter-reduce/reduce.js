const meuArray=[21,3,5,1,34563,947];//declarando o array que será usado nas funções
//função sem initial value
function somaGeral(arr){
    return arr.reduce(function (prev, current){
        console.log(prev);
        console.log(current);
        return prev + current;
    })
}
//chamando a função no terminal
console.log(somaGeral(meuArray));

//função agora com um initial value 
function somaInitialValue(arr){
    return arr.reduce(function (prev, current){
        return prev + current;
    }, 1)
}
//chamando a função no terminal
console.log(`agora usando dando um initial value `, somaInitialValue(meuArray));