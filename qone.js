// . Write a program to find all pairs of an integer array whose sum is equal to a given number?


let arr = [ 1, 5, 7, -1 ];
    let n = arr.length;
    let sum = 6;

    function pairsCount(arr,n,sum){
     let count =0;
     for(let i=0;i<n;i++){
         for(let k=i+1;k<n;k++){
            if(arr[i]+arr[k]==sum){
                count++;
            }
        }
    }
    console.log(count)
    }
    pairsCount(arr,n,sum)