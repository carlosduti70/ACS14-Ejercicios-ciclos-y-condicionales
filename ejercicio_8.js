let nums=[0,2,1,1];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(i > nums[i]){
        contenedor=nums[i]+contenedor;
    }
    
}
console.log(contenedor);