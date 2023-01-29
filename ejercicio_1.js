let nums=[3,5,8,4,3,3];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(nums[i] % 2 !==0){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);