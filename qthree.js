// Write a program to check if two strings are a rotation of each other?

function checkstring(s1,s2,index,size){
    for(let i=0;i<size;i++){
        if(s1[i]!=s2[(index+i)%size])return false
        // console.log("first")
    }
    return true
}
let s1="efgh"
let s2="ghef"

if(s1.length != s2.length){
    console.log("s1 is  not rotation of s2")
}else{
let firstchar=s1[0]
let size=s1.length
let indexes=[]

for(let i=0;i<size;i++){
    if(s2[i]==firstchar){
        indexes.push(i)
    }
}
let rotation =false

for(let idx of indexes){
    rotation = checkstring(s1,s2,idx,size)
    if(rotation)
    break;
}
    if(rotation){
        console.log("s1 is  rotation of s2")
    }else{
        console.log("s1 is not rotation of s2")
    }
}

