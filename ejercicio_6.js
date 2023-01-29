let nums=[12,14,5,7];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(nums[i] % 7 !==0){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);