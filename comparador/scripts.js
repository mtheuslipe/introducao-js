function comparaNumeros(num1 , num2){
    
    const igualdade = criaFrase1(num1, num2);
    const compara = criaFrase2(num1, num2);
    return`${igualdade} ${compara}`
}

function criaFrase1(num1, num2){
    let saoIguais= '';
    if(num1!=num2){
        saoIguais='não';
    };
    return `${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaFrase2(num1, num2){
    const soma = num1+num2;

    const compara10 = soma > 10;
    const compara20 = soma >20;

    let resultado10='';
    let resultado20='';

    if(!compara10){
        resultado10='não';
    };
    if(!compara20){
        resultado20='não';
    };
    return `Sua soma é igual a ${soma}, que ${resultado10} é maior que 10 e ${resultado20} é maior que 20.`;
}
console.log(comparaNumeros(10, 10));