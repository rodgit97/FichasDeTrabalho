const {Book} = require('../models');
// const {Book, Loan} = require('../models');

const bookController = {

    index: async(req, res) => {
        try {            
            const books = await Book.findAll({
                // inclui dados relacionados
                // include: [{ model: Loan }]
                                include: [{ model: Loan }]

            });
            res.json(books);
        } catch (error) {
            res.status(500).json({message:'Erro interno'});
        }
    },

    store: async(req,res) => {
        try {            
            const { title, author_name, publication_date, 
                genre, available_copies} = req.body;
            // validação campos obrigatorios
            if( !title || !author_name || !publication_date|| !genre){
                res.status(400).json({message:"campos obrigatórios em falta"});
            }

            await Book.create({
                title,
                author_name, 
                publication_date, 
                genre,
                available_copies: available_copies || 1,
            })
            
            res.json({message: 'livro criado'});            
        } catch (error) {
            res.status(500).json({message:'Erro interno'});
        }
    }

    // TODO: delete e update
}

module.exports = bookController;


// const { Book, Loan } = require('../models');

// const bookController = {

//     index: async (req, res) => {
//         try {
//             const books = await Book.findAll({
//                 include: [{ model: Loan, as: 'loans' }]
//             });
//             res.json(books);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Erro interno' });
//         }
//     },

//     store: async (req, res) => {
//         try {
//             const { title, author_name, publication_date, genre, available_copies } = req.body;

//             if (!title || !author_name || !publication_date || !genre) {
//                 return res.status(400).json({ message: 'Campos obrigatórios em falta' });
//             }

//             const book = await Book.create({
//                 title,
//                 author_name,
//                 publication_date,
//                 genre,
//                 available_copies: available_copies || 1,
//             });

//             res.status(201).json({ message: 'Livro criado', data: book });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Erro interno' });
//         }
//     },

//     update: async (req, res) => {
//         try {
//             const book = await Book.findByPk(req.params.id);
//             if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

//             await book.update(req.body);
//             res.json({ message: 'Livro atualizado', data: book });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Erro interno' });
//         }
//     },

//     destroy: async (req, res) => {
//         try {
//             const book = await Book.findByPk(req.params.id);
//             if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

//             await book.destroy();
//             res.json({ message: 'Livro eliminado' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Erro interno' });
//         }
//     }
// };

// module.exports = bookController;