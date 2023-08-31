// Write a program to convert prefix expression to infix expression.

function isOperator(x){
    switch(x){
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
    }
    return false
    }

 
    function f1 (infix){
    let s = [];
    let length = infix.length
    // console.log(length)
    for(let i=length-1;i>=0;i--){
        let p= infix[i];
        if(isOperator(p)){
            let s1 = s[s.length-1]
            // console.log(s1)
            s.pop()
            let s2 = s[s.length-1]
            s.pop()
            let temp = "("+ s1+p+s2+ ")";
            s.push(temp)
            // console.log(s)
        }else{
            s.push(p+"")
        }
    }
    return s[s.length-1];
    }
let prefix = "*-A/BC-/AKL"
console.log(f1(prefix))