// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

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

 function f1 (postfix){
    let s = [];
    let length = postfix.length
    // console.log(length)
    for(let i=0;i<length;i++){
        if(isOperator(postfix[i])){
            let s1 = s[s.length-1]
            // console.log([s.length-1])
            s.pop()
            let s2 = s[s.length-1]
            s.pop()
            let temp = postfix[i]+s2+s1;
            s.push(temp)
            console.log(s)
        }else{
            s.push(postfix[i]+"")
        }
    }
    let ans = ""
    while(s.length>0){
      ans += s.pop();
      return ans;
    }
    }
let postfix = "AB+CD/*"
console.log(f1(postfix))