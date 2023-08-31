// Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

//Reverse Function:
let a = [5,55,555,5555,55555]
let n = a.length
function ReverseArray(arr,start,end){
    while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr)
}
function PrintanArray(arr){
    ReverseArray(a,0,n-1)
}

PrintanArray(a)
