const array =[];
array.push(() => console.log("hello world1"));
array.push(() => console.log("hello world2"));
array.push(() => console.log("hello world3"));

for (let i = 0; i < array.length; i++) {
    array[i]();//<-isto executa
    
}

//---------------------------------------
//outra execução alternativa
array.forEach(element=>{
    element();
})
