// Write a program to print the first non-repeated character from a string?

const string = "nnnnn";
let index=-1;
// console.log(index)
let fun="";
if(string.length==0){
    console.log("empty string")
}else{
    for(let i of string){
        // console.log(string.split(i))
        if(string.split(i).length-1===1){
            fun = i;
            break;
        }else{
            index = index+1;
        }
    }
}
if(index==string.length-1){
    console.log("all characters repeating")
}else{
    console.log(`first string of non repeating char is ${fun}`)
}