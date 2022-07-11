function verificaPares(array){
    // if(array.typeof !== number) return `somente arrays do tipo number!!`;
     if(!array) return -1;
     if(!array.length) return -1;
     for(let i=0; i<array.length; i++){
         if(array[i]===0){
             console.log("tu já é 0!!");
         }else if(array[i] %2===0){
             array[i]=0
             console.log(`substituina ${array[i]} por 0...`);
         }
     }
     return array;
 }
 let arr=[];
 console.log(verificaPares(arr));