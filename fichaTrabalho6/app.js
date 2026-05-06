// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
const { log } = require('console');//importação do módulo console, que é um módulo embutido do Node.js que fornece uma interface para exibir mensagens de log e depuração no console. O método log é usado para imprimir mensagens no console, o que pode ser útil para depurar o código e acompanhar o fluxo de execução da aplicação.
const express = require('express');
const fs = require('fs');   // para ler e escrever ficheiros
const app = express();
const port = 3000;
const file = "logs.txt";

// função para ler ficheiro de logs
function readLogs(){//definição de uma função chamada readLogs que tem como objetivo ler o conteúdo do arquivo de logs. A função verifica se o arquivo existe usando fs.existsSync(file). Se o arquivo existir, ele é lido usando fs.readFileSync(file, 'utf-8') e o conteúdo é armazenado na variável logs. O conteúdo do arquivo é retornado como resultado da função. Caso o arquivo não exista, a função retorna uma string vazia, indicando que não há logs disponíveis para leitura.
    let logs = "";//inicialização da variável logs como uma string vazia. Essa variável será usada para armazenar o conteúdo do arquivo de logs lido, caso o arquivo exista. Se o arquivo não existir, a variável logs permanecerá como uma string vazia, indicando que não há logs disponíveis para leitura.
    if(fs.existsSync(file)){//verificação para determinar se o arquivo de logs existe usando
        logs = fs.readFileSync(file, 'utf-8');//leitura do conteúdo do arquivo de logs usando fs.readFileSync(file, 'utf-8'). O conteúdo do arquivo é lido como uma string no formato UTF-8 e armazenado na variável logs. Essa leitura é realizada apenas se o arquivo existir, conforme verificado pela condição anterior.
    }
    return logs;
}

// função para guardar o ficheiro
function writeLogs(dados){//definição de uma função chamada writeLogs que tem como objetivo salvar os dados de logs em um arquivo. A função recebe um parâmetro chamado dados, que é a string contendo os logs a serem salvos. A função utiliza fs.writeFileSync(file, dados, { flag: 'a' }) para escrever os dados no arquivo especificado pela variável file. O terceiro argumento { flag: 'a' } indica que os dados devem ser adicionados ao final do arquivo existente, em vez de sobrescrevê-lo. Isso permite que os logs sejam acumulados no arquivo ao longo do tempo, em vez de serem substituídos a cada nova escrita.
    fs.writeFileSync(file,dados,{flag: 'a'});//escrita dos dados de logs no arquivo especificado pela variável file, utilizando fs.writeFileSync(file,
}

// // 3. criar middleware de registo
// app.use((req, res, next) => {    
//     // let ficheiro
//     let logs = readLogs();
//     // adicionar novo log
//     // 6. colocar no log data, methos e path separados por virgulas
//     logs += "\n" + new Date().toISOString() + ",\t" +  req.method 
//         + ",\t" + req.path + ", ";
//     // voltar a guardar ficheiro
//     writeLogs(logs);
    
//     console.log(logs);
//     // continua para as rotas
//     next();
// });

// 3. criar middleware de registo
app.use((req, res, next) => {    // leitura do ficheiro
    // usando append em vez de writeFile
    logs += "\n" + new Date().toISOString() + ",\t" +  req.method 
        + ",\t" + req.path + ", ";
    
    fs.appendFileSync(file, log);//escrita dos dados de logs no arquivo especificado pela variável file, utilizando fs.appendFileSync(file, log). A função appendFileSync é usada para adicionar os dados de logs ao final do arquivo existente, em vez de sobrescrevê-lo. Isso permite que os logs sejam acumulados no arquivo ao longo do tempo, em vez de serem substituídos a cada nova escrita. O conteúdo dos logs é armazenado na variável log, que é uma string formatada com a data, método e caminho da requisição.
    // fs.writeFileSync(file,log,{flag:'a'});
   
    console.log(logs);
    // continua para as rotas
    next();//chamada da função next() para passar o controle para o próximo middleware ou rota na cadeia de processamento das requisições. Isso é importante para garantir que as requisições continuem a ser processadas corretamente após a execução do middleware de registro de logs.
});

app.get('/',(req,res)=>{//definição de uma rota para o caminho "/" usando o método GET. Quando uma requisição GET é feita para o caminho "/", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/plain'. Em seguida, res.end() é chamado para finalizar a resposta e enviar a string '<h1>Olá mundo<h1>' como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/" com uma requisição GET, ele receberá a mensagem "Olá mundo" formatada como um título HTML.
    // 4.a.
    res.writeHead(200, { 'Content-Type': 'text/plain' });//definição do status da resposta como 200 (OK) e do tipo de conteúdo como 'text/plain' usando res.writeHead(). Isso indica que a resposta é bem-sucedida e que o conteúdo da resposta é do tipo texto simples.
    res.end('<h1>Olá mundo<h1>');//finalização da resposta usando res.end() e envio da string '<h1>Olá mundo<h1>' como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/" com uma requisição GET, ele receberá a mensagem "Olá mundo" formatada como um título HTML.
});

app.get('/html',(req,res)=>{//definição de uma rota para o caminho "/html" usando o método GET. Quando uma requisição GET é feita para o caminho "/html", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/html'. Em seguida, res.end() é chamado para finalizar a resposta e enviar a string '<h1>olá mundo</h1>' como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/html" com uma requisição GET, ele receberá a mensagem "olá mundo" formatada como um título HTML.
    // 4.b.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>olá mundo</h1>');
});

app.get('/html2',(req,res)=>{// definição de uma rota para o caminho "/html2" usando o método GET. Quando uma requisição GET é feita para o caminho "/html2", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, o conteúdo do arquivo "index.html" é lido usando fs.readFileSync('./index.html', 'utf8') e armazenado na variável htmlContents. Em seguida, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/html'. Por fim, res.end() é chamado para finalizar a resposta e enviar o conteúdo do arquivo "index.html" como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/html2" com uma requisição GET, ele receberá a página HTML contida no arquivo "index.html".
    // 4.c.
    const htmlContents = fs.readFileSync('./index.html','utf8');//leitura do conteúdo do arquivo "index.html" usando fs.readFileSync('./index.html', 'utf8'). O conteúdo do arquivo é lido como uma string no formato UTF-8 e armazenado na variável htmlContents.
    res.writeHead(200, { 'Content-Type': 'text/html' });//definição do status da resposta como 200 (OK) e do tipo de conteúdo como 'text/html' usando res.writeHead(). Isso indica que a resposta é bem-sucedida e que o conteúdo da resposta é do tipo HTML.
    res.end(htmlContents);
});
app.get('/html3',(req,res)=>{// definição de uma rota para o caminho "/html3" usando o método GET. Quando uma requisição GET é feita para o caminho "/html3", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, o conteúdo do arquivo "index.html" é lido usando fs.readFileSync('./index.html', 'utf8') e armazenado na variável htmlContents. Em seguida, a string '{{data}}' presente no conteúdo do arquivo é substituída pelo valor da data atual em formato ISO usando htmlContents.replace('{{data}}', new Date().toISOString()). O resultado dessa substituição é armazenado novamente na variável htmlContents. Por fim, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/html', e res.end() é chamado para finalizar a resposta e enviar o conteúdo atualizado do arquivo "index.html" como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/html3" com uma requisição GET, ele receberá a página HTML contida no arquivo "index.html", mas com a data atual exibida no lugar da string '{{data}}'.
    // 4.e. 
    let htmlContents = fs.readFileSync('./index.html','utf8');//leitura do conteúdo do arquivo "index.html" usando fs.readFileSync('./index.html', 'utf8'). O conteúdo do arquivo é lido como uma string no formato UTF-8 e armazenado na variável htmlContents.
    // substituir os conteudos {{data}} ➡️ Data do servidor
    // E atualizar a variável
    htmlContents = htmlContents.replace('{{data}}',//substituição da string '{{data}}' presente no conteúdo do arquivo "index.html" pelo valor da data atual em formato ISO usando htmlContents.replace('{{data}}',
        new Date().toISOString());
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContents);//finalização da resposta usando res.end() e envio do conteúdo atualizado do arquivo "index.html" como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/html3" com uma requisição GET, ele receberá a página HTML contida no arquivo "index.html", mas com a data atual exibida no lugar da string '{{data}}'.
});

app.get('/users/:name/:idade',(req,res)=>{//definição de uma rota para o caminho "/users/:name/:idade" usando o método GET. Os segmentos ":name" e ":idade" são parâmetros de rota que podem ser acessados dentro da função de callback através do objeto req.params. Quando uma requisição GET é feita para um caminho que corresponde a esse padrão, a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a resposta é enviada usando res.send() para enviar uma string formatada que inclui os valores dos parâmetros "name" e "idade" extraídos da URL. Isso significa que quando um cliente acessar um caminho como "/users/John/30" com uma requisição GET, ele receberá a mensagem "Olá John tens 30" como resposta.
    // 5.a. via parametro
    res.send("Olá " + req.params.name + " tens " + req.params.idade);
});

app.get('/users',(req,res)=>{// definição de uma rota para o caminho "/users" usando o método GET. Quando uma requisição GET é feita para o caminho "/users", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a resposta é enviada usando res.send() para enviar uma string formatada que inclui os valores dos parâmetros "name" e "idade" extraídos da query string da URL. Isso significa que quando um cliente acessar um caminho como "/users?name=John&idade=30" com uma requisição GET, ele receberá a mensagem "Olá John tens 30" como resposta.
    // 5.a. via query
    res.send("olá" + req.query.name + " tens " + req.query.idade);
});

// 7. logs
app.get('/logs',(req,res)=>{// definição de uma rota para o caminho "/logs" usando o método GET. Quando uma requisição GET é feita para o caminho "/logs", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a função readLogs() é chamada para ler o conteúdo do arquivo de logs e armazená-lo na variável logs. Em seguida, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/plain', e res.end() é chamado para finalizar a resposta e enviar o conteúdo dos logs como corpo da resposta. Isso significa que quando um cliente acessar o caminho "/logs" com uma requisição GET, ele receberá o conteúdo do arquivo de logs exibido como texto simples.
    const logs = readLogs();//chamada da função readLogs() para ler o conteúdo do arquivo de logs e armazená-lo na variável logs. A função readLogs() é responsável por verificar se o arquivo de logs existe e, se existir, ler seu conteúdo e retorná-lo como uma string. O conteúdo dos logs é então armazenado na variável logs para ser usado posteriormente na resposta enviada ao cliente.
    // res.send(logs);
    res.writeHead(200, {  'Content-Type': 'text/plain' })
    res.end(logs);
});

// 8. logs download via writeHEad
app.get('/logsDL',(req,res)=>{//definição de uma rota para o caminho "/logsDL" usando o método GET. Quando uma requisição GET é feita para o caminho "/logsDL", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a função readLogs() é chamada para ler o conteúdo do arquivo de logs e armazená-lo na variável logs. Em seguida, a resposta é enviada usando res.writeHead() para definir o status da resposta como 200 (OK), o tipo de conteúdo como 'text/plain' e um cabeçalho 'Content-Disposition' que indica que a resposta deve ser tratada como um arquivo para download com o nome "ficheiroDeLogs.txt". Por fim, res.end() é chamado para finalizar a resposta e enviar o conteúdo dos logs como corpo da resposta, permitindo que o cliente baixe o arquivo de logs com o nome especificado.
    const logs = readLogs();//chamada da função readLogs() para ler o conteúdo do arquivo de logs e armazená-lo na variável logs. A função readLogs() é responsável por verificar se o arquivo de logs existe e, se existir, ler seu conteúdo e retorná-lo como uma string. O conteúdo dos logs é então armazenado na variável logs para ser usado posteriormente na resposta enviada ao cliente.
    // res.send(logs);
    res.writeHead(200, {  // definição do status da resposta como 200 (OK), do tipo de conteúdo como 'text/plain' e do cabeçalho 'Content-Disposition' para indicar que a resposta deve ser tratada como um arquivo para download com o nome "ficheiroDeLogs.txt". Isso informa ao cliente que a resposta contém um arquivo de texto simples e sugere que ele seja baixado com o nome especificado.
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; '
        + 'filename="ficheiroDeLogs.txt"'
     })
    res.end(logs);
});

// 8. logs download via download
app.get('/logsDL2',(req,res)=>{//definição de uma rota para o caminho "/logsDL2" usando o método GET. Quando uma requisição GET é feita para o caminho "/logsDL2", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, a função res.download() é chamada para enviar o arquivo de logs como um arquivo para download. O primeiro argumento file especifica o caminho do arquivo a ser enviado, e o segundo argumento 'ficheiroDeLogs.txt' define o nome do arquivo que será sugerido para download pelo cliente. Isso significa que quando um cliente acessar o caminho "/logsDL2" com uma requisição GET, ele receberá uma resposta que iniciará o download do arquivo de logs com o nome "ficheiroDeLogs.txt".
    // const logs = readLogs();
    res.download(file,'ficheiroDeLogs.txt');
});

// 9
app.get('/clear',(req,res)=>{//definição de uma rota para o caminho "/clear" usando o método GET. Quando uma requisição GET é feita para o caminho "/clear", a função de callback é executada, recebendo os objetos req (requisição) e res (resposta). Dentro da função de callback, é verificado se o arquivo de logs existe usando fs.existsSync(file). Se o arquivo existir, ele é excluído usando fs.unlinkSync(file) e uma resposta é enviada com a mensagem 'Log eliminado.'. Caso o arquivo não exista, uma resposta de erro 404 é enviada com a mensagem 'Ficheiro de log não encontrado.'. Isso significa que quando um cliente acessar o caminho "/clear" com uma requisição GET, ele poderá eliminar o arquivo de logs existente ou receberá uma mensagem indicando que o arquivo de logs não foi encontrado.
    if (fs.existsSync(file)) {//verificação para determinar se o arquivo de logs existe usando
        fs.unlinkSync(file);
        res.send('Log eliminado.');
    } else {
        res.status(404).send('Ficheiro de log não encontrado.');
    }
});

app.listen(port, () => {// inicialização do servidor Express para escutar as requisições na porta especificada pela variável port. A função de callback é executada quando o servidor começa a escutar, e dentro dessa função, uma mensagem é exibida no console usando console.log() para indicar que o aplicativo está ouvindo na porta especificada. Isso significa que quando o servidor for iniciado, ele estará pronto para receber e processar as requisições dos clientes na porta definida.
  console.log(`Example app listening on port ${port}`)// exibição de uma mensagem no console usando console.log() para indicar que o aplicativo está ouvindo na porta especificada. A mensagem inclui o número da porta, que é definido pela variável port. Isso é útil para confirmar que o servidor foi iniciado corretamente e está pronto para receber requisições dos clientes na porta definida.
})