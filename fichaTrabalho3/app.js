const started = () => { // função para indicar o início do download, que imprime a mensagem "download started" no console quando chamada
  console.log("download started");
};

const finished = () => { // função para indicar o fim do download, que imprime a mensagem "download finished" no console quando chamada
  console.log("download finished");
};

const update = (percent) => { // função para atualizar o progresso do download, que recebe um parâmetro percent representando a porcentagem de download concluída e imprime essa porcentagem no console no formato "X% downloaded" quando chamada
  console.log(`${percent}% downloaded`);
};

function performanceDownload(start, update, complete) { // função para simular o processo de download, que recebe três parâmetros: start, update e complete, que são funções a serem chamadas em momentos específicos do processo de download. A função chama a função start para indicar o início do download, depois simula o progresso do download chamando a função update com valores de 1 a 100 para representar a porcentagem concluída, e finalmente chama a função complete para indicar o fim do download.
    start(); // Chamar a função start para indicar o início do download
    for (let i = 1; i <= 100; i++) { //  Simular o progresso do download usando um loop que itera de 1 a 100, representando a porcentagem de download concluída
        update(i);// Chamar a função update com o valor atual de i para atualizar o progresso do download no console
    }
    complete(); // Chamar a função complete para indicar o fim do download
}
        
performanceDownload(started, update, finished);// Chamar a função performanceDownload, passando as funções started, update e finished como argumentos para simular o processo de download e exibir as mensagens correspondentes no console.



//---------------------------------------------------
