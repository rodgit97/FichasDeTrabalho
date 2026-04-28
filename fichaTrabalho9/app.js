// // //projeto ficha trabalho 9
// // const express = require("express");
// // const { Sequelize } = require("sequelize");

// // const sequelize = new Sequelize("teste9", "root", "password", {
// //   host: "localhost",
// //   dialect: "mysql",
// // });

// // // sequelize.authenticate()
// // //     .then(() => {
// // //         console.log('Conexão estabelecida com sucesso.');
// // //     })
// // //     .catch((error) => {
// // //         console.error('Não foi possível conectar ao banco de dados:', error);
// // //     }
// // // );

// // //4.c
// // app.sync(); // sincroniza o modelo com o banco de dados, criando a tabela "Cars" se ela ainda não existir

// // const Port = 3000;
// // const app = express();
// // app.use(express.json()); // middleware para analisar o corpo das requisições como JSON

// // const Car = require("./models/Car"); // importa o modelo "Car" para usar nas rotas

// // //5.a

// // app.get("/users", async (req, res) =>{
// //     const users = await User.findAll();
// //     res.json(users);

// // } )
// // //5.b
// // app.post("/cars", async (req, res) => {
// //     const { Brand, Model, LicensePlate, Color, Year, Power, Displacement } = req.body;
// //     if (!Brand || !Model || !LicensePlate || !Color || !Year || !Power || !Displacement) {
// //         return res.status(400).json({ error: "Todos os campos são obrigatórios." });

// //     }
// // });
// // //5.c
// // app.delete("/cars/:id", async (req, res) => {
// //     const { id } = req.params;
// //     const car = await Car.findByPk(id);
// //     if (!car) {
// //         return res.status(404).json({ error: "Carro não encontrado." });

// //     }
// //     await car.destroy();
// //     res.json({ message: "Carro deletado com sucesso." });
// // });

// // //5.d
// // app.delete("/users/:LicensePlate", async (req, res) => {
// //     const { LicensePlate } = req.params;
// //     const user = await User.findOne({ where: { LicensePlate } });
// //     if (!user) {
// //         return res.status(404).json({ error: "Usuário não encontrado." });
// //     }
// //     await user.destroy();
// //     res.json({ message: "Usuário deletado com sucesso." });
// // }
// // );

// // app.listen(Port, () => {
// //   console.log(`Servidor a correr na porta ${Port}`);
// // });
//------------------------------------------------------------------------------------
// // const express = require('express');
// // const Car = require('./models/Car');

// // const sequelize = require('./config/database');

// // sequelize.sync({ force: true }) //force:true - obriga a eliminar e recriar a base de dados
// //     .then(() =>{
// //         console.log("BD sincronizada");
// //         Car.create({
// //             Brand: "Renault",
// //             Model: "clio",
// //             LicensePlate: "AA-12-12",
// //             Color: "Vermelho",
// //             Year: 1987,
// //             Power: 60,
// //             Displacement: 1200
// //         })
// //         const novosCarros = [
// //             { Brand: 'Tesla', Model: 'Model 3', LicensePlate: 'AA-00-BB', Color: 'Branco', Year: 2023, Power: 283, Displacement: 0 },
// //             { Brand: 'BMW', Model: '320d', LicensePlate: 'CC-11-DD', Color: 'Preto', Year: 2020, Power: 190, Displacement: 1995 },
// //             { Brand: 'Toyota', Model: 'Corolla', LicensePlate: 'EE-22-FF', Color: 'Cinzento', Year: 2022, Power: 122, Displacement: 1798 },
// //             { Brand: 'Volkswagen', Model: 'Golf', LicensePlate: 'GG-33-HH', Color: 'Azul', Year: 2019, Power: 150, Displacement: 1968 }
// //         ];
// //         Car.bulkCreate(novosCarros);
// //     })
// //     .catch((error) => {
// //         console.log("erro ao aceder à BD");
// //     });

// // const PORT = 3000;
// // const app = express();

// // app.use(express.json());

// // //endpoints
// // // 5.a. istar todos os carros existentes na tabela
// // // Cars e devolver a resposta no body
// // app.get("/cars", async (req,res) => {
// //     const id = req.query.id;
// //     // if(id)
// //     //     res.redirect(300,`/cars/findById`);

// //     const cars = await Car.findAll();
// //     res.json(cars);
// // });
// // // versão promise
// // app.get("/cars2", (req,res) => {
// //     const promise = Car.findAll();
// //     promise.then((cars) => {
// //         res.json(cars);
// //     });
// // });
// // // versão promise2
// // app.get("/cars3", (req,res) => {
// //     Car.findAll().then((cars) => {
// //         res.json(cars);
// //     });
// // });

// // //  5.b. Adicionar um novo carro à tabela Cars, o ID
// // // deve ser gerado automaticamente pelo MySQL tendo
// // // em conta o número de carros existentes. O ID do
// // // carro adicionado deve ser devolvido na resposta.
// // app.post("/cars", async (req,res) => {
// //     const { Brand, Model, LicensePlate,Color,
// //         Year,Power,Displacement } = req.body;

// //     if( !Brand || !Model || !LicensePlate )
// //         return res.status(400).send("Campos obrigatórios em falta");

// //     try {
// //         const car = await Car.create({ Brand, Model,
// //             LicensePlate, Color, Year,Power,Displacement });

// //         res.json({resultado: "carro criado", id:car.id});
// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).send("ocorreu um erro");
// //     }
// // });

// // // 5.c. Apagar um carro da tabela Cars pelo seu
// // // ID recebido no body. O número de linhas afetadas
// // // deve ser devolvido na resposta. Caso o carro a
// // // apagar não exista o erro deverá ser tratado de
// // // forma adequada.
// // app.delete("/cars", async(req,res) =>{
// //     const { id } = req.body;

// //     const carro = await Car.findByPk(id);
// //     if(!carro)
// //         return res.status(404).send("O carro não existe");

// //     // await carro.destroy();   //não reotna nr de linhas
// //     const result = await Car.destroy( {where: { id: id }});
// //     res.json({linhas_afetadas: result});
// // });

// // // 5.d. Apagar um carro da tabela Cars pela sua matrícula
// // // recebido como parâmetro. O número de linhas afetadas
// // // deve ser devolvido na resposta. Caso o carro a apagar
// // // não exista o erro deverá ser tratado de forma adequada.
// // app.delete("/cars/license/:plate", async(req,res) =>{
// //     try {
// //         const { plate } = req.params;

// //         console.log(plate);
// //         if(!Car.validarMatricula(plate))
// //             return res.status(400).send("matricula inválida");

// //         const carro = await Car.findOne({where:{LicensePlate: plate}});

// //         if(!carro)
// //             return res.status(404).send("O carro não existe");

// //         // await carro.destroy();   //não reotna nr de linhas
// //         const result = await Car.destroy( {where: { id: carro.id }});
// //         res.json({linhas_afetadas: result});
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send("erro da BD");
// //     }
// // });

// // // 5.d. Selecionar apenas um carro pelo seu ID (como query) e devolver
// // // na resposta. Caso o carro a selecionar não exista, o erro deverá ser
// // // tratado de forma adequada.
// // app.get("/cars/findById",async (req,res)=>{
// //     try {
// //         const id = req.query.id;

// //         if(!id)
// //             return res.status(400).send("o id é obrigatório");

// //         const carro = await Car.findByPk(id);

// //         if(!carro)
// //             return res.status(404).send("carro não encontrado");

// //         res.json(carro);
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send("erro da BD");
// //     }
// // });

// // // 5.f. Selecionar os carros pelo marca e modelo. Devolver todos os carros
// // // que reúnam essas condições. Caso não exista, o erro deverá ser tratado de
// // // forma adequada.
// // app.get('/cars/brand/:brand/model/:model', async (req,res,)=>{
// //     const {brand, model} = req.params;

// //     const carros = await Car.findAll({where: {Brand: brand, Model: model}});

// //     if(!carros)
// //         return res.status(404).send("nenhum carro não encontrado");

// //     res.json(carros);
// // });

// // // 5.g. Alterar os detalhes de um carro selecionado pelo seu ID. Os
// // // novos detalhes deverão ser devolvidos na resposta.
// // app.patch('/cars/:id', async (req,res) => {
// //     const {id} = req.params;
// //     const { Brand, Model, LicensePlate,Color,
// //         Year,Power,Displacement } = req.body;

// //         let updates = {};

// //         if(Brand)
// //             updates.Brand = Brand;
// //         if(Model)
// //             updates.Model = Model;
// //         if(LicensePlate)
// //             updates.LicensePlate = LicensePlate;
// //         if(Color)
// //             updates.Color = Color;
// //         if(Year)
// //             updates.Year = Year;
// //         if(Power)
// //             updates.Power = Power;
// //         if(Displacement)
// //             updates.Displacement = Displacement;

// //     try {
// //         const carro = await Car.findByPk(id);
// //         const carroUpdated = await carro.update(updates);
// //         // const carroUpdated = await Car.update(updates,{where:{id:id}}); //retorna apenas  linhas afetadas

// //         res.json(carroUpdated);
// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).send("ocorreu um erro");
// //     }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Servidor a correr em http://localhost:${PORT}`);
// // });

const express = require('express');
const Car = require('./models/Car');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


const sequelize = require('./config/database');
const swaggerAutogen = require('swagger-autogen');

sequelize.sync({ force: true }) //force:true - obriga a eliminar e recriar a base de dados
    .then(() =>{
        console.log("BD sincronizada");
        Car.create({
            Brand: "Renault",
            Model: "clio",
            LicensePlate: "AA-12-12",
            Color: "Vermelho",
            Year: 1987,
            Power: 60,
            Displacement: 1200
        })
        const novosCarros = [
            { Brand: 'Tesla', Model: 'Model 3', LicensePlate: 'AA-00-BB', Color: 'Branco', Year: 2023, Power: 283, Displacement: 0 },
            { Brand: 'BMW', Model: '320d', LicensePlate: 'CC-11-DD', Color: 'Preto', Year: 2020, Power: 190, Displacement: 1995 },
            { Brand: 'Toyota', Model: 'Corolla', LicensePlate: 'EE-22-FF', Color: 'Cinzento', Year: 2022, Power: 122, Displacement: 1798 },
            { Brand: 'Volkswagen', Model: 'Golf', LicensePlate: 'GG-33-HH', Color: 'Azul', Year: 2019, Power: 150, Displacement: 1968 }
        ];
        Car.bulkCreate(novosCarros);
    })
    .catch((error) => {
      console.log(error)
        console.log("erro ao aceder à BD");
    });

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//endpoints
// 5.a. istar todos os carros existentes na tabela
// Cars e devolver a resposta no body
app.get("/cars", async (req,res) => {
    const id = req.query.id;
    // if(id)
    //     res.redirect(300,`/cars/findById`);

    const cars = await Car.findAll();
    res.json(cars);
});
// versão promise
app.get("/cars2", (req,res) => {
    const promise = Car.findAll();
    promise.then((cars) => {
        res.json(cars);
    });
});
// versão promise2
app.get("/cars3", (req,res) => {
    Car.findAll().then((cars) => {
        res.json(cars);
    });
});

//  5.b. Adicionar um novo carro à tabela Cars, o ID
// deve ser gerado automaticamente pelo MySQL tendo
// em conta o número de carros existentes. O ID do
// carro adicionado deve ser devolvido na resposta.
app.post("/cars", async (req,res) => {
    const { Brand, Model, LicensePlate,Color,
        Year,Power,Displacement } = req.body;

    if( !Brand || !Model || !LicensePlate )
        return res.status(400).send("Campos obrigatórios em falta");

    try {
        const car = await Car.create({ Brand, Model,
            LicensePlate, Color, Year,Power,Displacement });

        res.json({resultado: "carro criado", id:car.id});
    } catch (error) {
        console.log(error);
        return res.status(500).send("ocorreu um erro");
    }
});

// 5.c. Apagar um carro da tabela Cars pelo seu
// ID recebido no body. O número de linhas afetadas
// deve ser devolvido na resposta. Caso o carro a
// apagar não exista o erro deverá ser tratado de
// forma adequada.
app.delete("/cars", async(req,res) =>{
    const { id } = req.body;

    const carro = await Car.findByPk(id);
    if(!carro)
        return res.status(404).send("O carro não existe");

    // await carro.destroy();   //não reotna nr de linhas
    const result = await Car.destroy( {where: { id: id }});
    res.json({linhas_afetadas: result});
});

// 5.d. Apagar um carro da tabela Cars pela sua matrícula
// recebido como parâmetro. O número de linhas afetadas
// deve ser devolvido na resposta. Caso o carro a apagar
// não exista o erro deverá ser tratado de forma adequada.
app.delete("/cars/license/:plate", async(req,res) =>{
    try {
        const { plate } = req.params;

        console.log(plate);
        if(!Car.validarMatricula(plate))
            return res.status(400).send("matricula inválida");

        const carro = await Car.findOne({where:{LicensePlate: plate}});

        if(!carro)
            return res.status(404).send("O carro não existe");

        // await carro.destroy();   //não reotna nr de linhas
        const result = await Car.destroy( {where: { id: carro.id }});
        res.json({linhas_afetadas: result});
    } catch (error) {
        console.log(error);
        res.status(500).send("erro da BD");
    }
});

// 5.d. Selecionar apenas um carro pelo seu ID (como query) e devolver
// na resposta. Caso o carro a selecionar não exista, o erro deverá ser
// tratado de forma adequada.
app.get("/cars/findById",async (req,res)=>{
    try {
        const id = req.query.id;

        if(!id)
            return res.status(400).send("o id é obrigatório");

        const carro = await Car.findByPk(id);

        if(!carro)
            return res.status(404).send("carro não encontrado");

        res.json(carro);
    } catch (error) {
        console.log(error);
        res.status(500).send("erro da BD");
    }
});

// 5.f. Selecionar os carros pelo marca e modelo. Devolver todos os carros
// que reúnam essas condições. Caso não exista, o erro deverá ser tratado de
// forma adequada.
app.get('/cars/brand/:brand/model/:model', async (req,res,)=>{
    const {brand, model} = req.params;

    const carros = await Car.findAll({where: {Brand: brand, Model: model}});

    if(!carros)
        return res.status(404).send("nenhum carro não encontrado");

    res.json(carros);
});

// 5.g. Alterar os detalhes de um carro selecionado pelo seu ID. Os
// novos detalhes deverão ser devolvidos na resposta.
app.patch('/cars/:id', async (req,res) => {
    const {id} = req.params;
    const { Brand, Model, LicensePlate,Color,
        Year,Power,Displacement } = req.body;

        let updates = {};

        if(Brand)
            updates.Brand = Brand;
        if(Model)
            updates.Model = Model;
        if(LicensePlate)
            updates.LicensePlate = LicensePlate;
        if(Color)
            updates.Color = Color;
        if(Year)
            updates.Year = Year;
        if(Power)
            updates.Power = Power;
        if(Displacement)
            updates.Displacement = Displacement;

    try {
        const carro = await Car.findByPk(id);
        const carroUpdated = await carro.update(updates);
        // const carroUpdated = await Car.update(updates,{where:{id:id}}); //retorna apenas  linhas afetadas

        res.json(carroUpdated);
    } catch (error) {
        console.log(error);
        return res.status(500).send("ocorreu um erro");
    }
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});


// //-----------------------------------------------------------------------
// const express = require("express");
// const Car = require("./models/Car");
// const sequelize = require("./config/database");

// sequelize
//   .sync({ alter: true })
//   .then(async () => {
//     console.log("BD sincronizada");

//     await Car.create({
//       Brand: "Renault",
//       Model: "Clio",
//       LicensePlate: "AA-12-12",
//       Color: "Vermelho",
//       Year: 1987,
//       Power: 60,
//       Displacement: 1200,
//     });

//     const novosCarros = [
//       {
//         Brand: "Tesla",
//         Model: "Model 3",
//         LicensePlate: "AA-00-BB",
//         Color: "Branco",
//         Year: 2023,
//         Power: 283,
//         Displacement: 0,
//       },
//       {
//         Brand: "BMW",
//         Model: "320d",
//         LicensePlate: "CC-11-DD",
//         Color: "Preto",
//         Year: 2020,
//         Power: 190,
//         Displacement: 1995,
//       },
//       {
//         Brand: "Toyota",
//         Model: "Corolla",
//         LicensePlate: "EE-22-FF",
//         Color: "Cinzento",
//         Year: 2022,
//         Power: 122,
//         Displacement: 1798,
//       },
//       {
//         Brand: "Volkswagen",
//         Model: "Golf",
//         LicensePlate: "GG-33-HH",
//         Color: "Azul",
//         Year: 2019,
//         Power: 150,
//         Displacement: 1968,
//       },
//     ];
//     await Car.bulkCreate(novosCarros);
//   })
//   .catch(() => {
//     console.log("Erro ao aceder à BD");
//   });

// const PORT = 3000;
// const app = express();

// app.use(express.json());

// // 5.a — Listar todos os carros

// app.get("/carrs", async (req, res) => {
//   try {
//     const cars = await Car.findAll();
//     res.json(cars);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Erro da BD");
//   }
// });

// // 5.b — Adicionar um novo carro

// app.post("/carrs", async (req, res) => {
//   const { Brand, Model, LicensePlate, Color, Year, Power, Displacement } =
//     req.body;

//   if (!Brand || !Model || !LicensePlate)
//     return res.status(400).send("Campos obrigatórios em falta");

//   try {
//     const car = await Car.create({
//       Brand,
//       Model,
//       LicensePlate,
//       Color,
//       Year,
//       Power,
//       Displacement,
//     });
//     res.json({ resultado: "Carro criado", id: car.id });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Ocorreu um erro");
//   }
// });

// // 5.c — Apagar um carro pelo ID (recebido no body)

// app.delete("/carrs", async (req, res) => {
//   const { id } = req.body;

//   const carro = await Car.findByPk(id);
//   if (!carro) return res.status(404).send("O carro não existe");

//   const result = await Car.destroy({ where: { id: id } });
//   res.json({ linhas_afetadas: result });
// });

// // 5.d — Apagar um carro pela matrícula (parâmetro de rota)
// app.delete("/carrs/license/:plate", async (req, res) => {
//   try {
//     const { plate } = req.params;

//     if (!Car.validarMatricula(plate))
//       return res.status(400).send("Matrícula inválida");

//     const carro = await Car.findOne({ where: { LicensePlate: plate } });
//     if (!carro) return res.status(404).send("O carro não existe");

//     const result = await Car.destroy({ where: { id: carro.id } });
//     res.json({ linhas_afetadas: result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Erro da BD");
//   }
// });

// // 5.e — Selecionar um carro pelo ID (query string)  CORRIGIDO (#8): era "5.d"
// app.get("/carrs/findById", async (req, res) => {
//   try {
//     const { id } = req.query;

//     if (!id) return res.status(400).send("O id é obrigatório");

//     const carro = await Car.findByPk(id);
//     if (!carro) return res.status(404).send("Carro não encontrado");

//     res.json(carro);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Erro da BD");
//   }
// });

// // 5.f — Selecionar carros por marca e modelo

// app.get("/carrs/brand/:brand/model/:model", async (req, res) => {
//   const { brand, model } = req.params;

//   try {
//     const carros = await Car.findAll({ where: { Brand: brand, Model: model } });

//     if (carros.length === 0)
//       return res.status(404).send("Nenhum carro encontrado");

//     res.json(carros);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Erro da BD");
//   }
// });

// // 5.g — Atualizar os detalhes de um carro pelo ID

// app.put("/carrs/:id", async (req, res) => {
//   const { id } = req.params;
//   const { Brand, Model, LicensePlate, Color, Year, Power, Displacement } =
//     req.body;

//   const updates = {};
//   if (Brand) updates.Brand = Brand;
//   if (Model) updates.Model = Model;
//   if (LicensePlate) updates.LicensePlate = LicensePlate;
//   if (Color) updates.Color = Color;
//   if (Year) updates.Year = Year;
//   if (Power) updates.Power = Power;
//   if (Displacement) updates.Displacement = Displacement;

//   try {
//     const carro = await Car.findByPk(id);
//     if (!carro) return res.status(404).send("Carro não encontrado");

//     const carroUpdated = await carro.update(updates);
//     res.json(carroUpdated);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Ocorreu um erro");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor a correr em http://localhost:${PORT}`);
// });
