let nums=[12,3,5,7];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(nums[i] % 3 ==0){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);