//Write a program to find the smallest number using a stack.


class stack{
    constructor(){
     this.s=[];
     this.min;
    }
    getMin(){
        if(this.s.length==0){
            console.log("stack is empty")
        }
        else{
            console.log("The min element is ",this.min)
        }
    }
    push(x){
      if(this.s.length==0){
          this.min = x;
          this.s.unshift(x);
        console.log(x)
        return
      }
      else if(x<this.min){
        this.min=x;
      }
      else
        this.s.unshift(x)
    console.log(x)
    }
}

let s = new stack;

s.push(8);
s.push(5);
s.getMin();

