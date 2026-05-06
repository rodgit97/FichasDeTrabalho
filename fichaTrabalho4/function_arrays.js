const array =[];//criação de um array vazio
array.push(() => console.log("hello world1"));//adiciona uma função anônima ao array que, quando executada, exibirá a mensagem "hello world1"
array.push(() => console.log("hello world2"));
array.push(() => console.log("hello world3"));

for (let i = 0; i < array.length; i++) {//percorre o array usando um loop for
    array[i]();//<-isto executa
    
}

//---------------------------------------
//outra execução alternativa
array.forEach(element=>{//percorre o array usando o método forEach, que executa a função de callback para cada elemento do array
    element();//<-isto executa a função armazenada em cada elemento do array, exibindo as mensagens "hello world1", "hello world2" e "hello world3"
})
