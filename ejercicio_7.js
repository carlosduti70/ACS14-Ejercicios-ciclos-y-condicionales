let nums=[2,1,4,3];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(i==nums[i]){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);