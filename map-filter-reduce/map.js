const maca={
    value:2,
}
const uva={
    value:3,
}
const nums=[1,3];

//com this
function mapThis(arr, thisArg){
    return arr.map(function (item){
       return item * this.value;
    }, thisArg);
}
console.log(mapThis(nums, maca));
console.log(mapThis(nums, uva));

//sem this
function mapNoThis(arr){
    return arr.map(function (item){
        return item *2;
    });
}
console.log(`Sem o parâmetro this`, mapNoThis(nums));