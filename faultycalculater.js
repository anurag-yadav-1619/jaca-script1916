// creat a faulty calculater by taking the input for the users 
// the faulty caluculater fallows some task :
// it taker two input from the users 
// in place for  addition it will do subraction 
// in place for  multipal  it will do division
// in place for  devision it will do   multipaly
//  it performs 10% of time 
let random=Math.random()
let a=prompt("enter the first number ")
let b=prompt("enter the second number ")
let c=prompt("enter the operater ")
let obj={
    "+":"-",
    "*":"%",
    "-":"+",
    "/":"**",
 
}
if (random>0.1) {
    alert(`the result is ${eval(`${a}${c}${b}`)}`)
    
}
else{
    c=boj[c]
    alert(`the result is ${eval(`${a}${c}${b}`)}`)

}