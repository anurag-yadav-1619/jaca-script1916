// function sum(...value){
//     console.log(value)
// }
// sum(9,12)
// sum(100,199,78,987,4,46)

function sum(...value){
    let total=0;
    for(let n of value){
        total=total+n;
    }
    return total;

}

console.log(sum(34,54,6,9,34,56,78,45,76))
