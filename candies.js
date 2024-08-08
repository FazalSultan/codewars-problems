/*
    write a program, which can sort an array in Aceending order
    - You can use sort the array wwith or without sorting Algorithms
*/ 
var b =[8,5,4,1007,6,1];
for(var i=0 ; i< b.length -1 ;i++){
    for(var j =i +1 ; j< b.length  ; j++) {
       if(b[i] >= b[j]){
        var temp = b[i];
        b[i] =b[j];
        b[j] =temp
       }
    }
}
console.log(b)