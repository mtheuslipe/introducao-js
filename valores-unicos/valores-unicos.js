
const myArray=[1,1,30,40,30,45,387];

function valoresUnicos(arr){
    const valUnicos =new Set(arr);

    return [...valUnicos];
}
console.log(valoresUnicos(myArray))