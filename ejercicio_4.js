let nums=[1,1,0,0];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(nums[i]==0){
        contenedor=i+contenedor;
    }

}
console.log(contenedor)