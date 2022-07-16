function errorArray(arr, number){
    try{
        if(!arr && !number){
            throw new ReferenceError("Envie os Parâmetros");
        };

        if(typeof number !== 'number'){
            throw new TypeError("O número tem que ser do tipo number!!");
        };
        if(typeof arr!== 'object' ){
            throw new TypeError("A array tem que ser objeto!!");
        };
        if(arr.length!==number){
            throw new RangeError("Respeite o tamanho máximo do array!!");
        };
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Erro de referência notado!!");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Erro de tipo notado!!");
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("Erro de tamanho notado!!!");
            console.log(e.message);
        }
        else{
            console.log(`tipo de erro não achado: ${e}`);
        }
    }    
}
console.log(errorArray());

