let nums=[0,2,1,4];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(i < nums[i]){
        contenedor=i+contenedor;
    }
    
}
console.log(contenedor);