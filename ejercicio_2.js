let nums=[10,50,8,4];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(i % 2 !==1){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);