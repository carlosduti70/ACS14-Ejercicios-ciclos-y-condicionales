let nums=[10,50,8,4,20];
let contenedor=0;
for(i=0; i<nums.length; i++){
    if(nums[i]>10){
        contenedor=nums[i]+contenedor;
    }

}
console.log(contenedor)