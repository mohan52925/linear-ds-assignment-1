// Write a program to check if all the brackets are closed in a given code snippet.

let bracket = "([{})]"

function bracketCheck(braces){
    let stack = [];
    for (let i=0;i<braces.length;i++){
        let x = braces[i];
        if(x=="["||x=="{" || x=="("){
            stack.push(x)
            continue;
        }
         if(stack.length==0){
         return false
       } 
        let check;
        switch(x){
            case "]":
                check=stack.pop()
                if(x=="{"||x=="(")
                return false
            break;
            case "}":
                check=stack.pop()
                if(x=="["|| x=="(")
                return false
            break;
            case ")":
                check=stack.pop()
                if(x=="["|| x=="{")
                return false
            break;
        }
    }
    return (stack.length==0);
}

if(bracketCheck(bracket)){
    console.log("balanced")
}else{
    console.log("non-balanced")
}
