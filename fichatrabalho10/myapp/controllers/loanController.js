// const {Loan, Book, User} = require('../models');

// const loanController = {

//     index: (req,res) => {
        
//     }
// }

// module.exports = loanController;

const { Loan, Book, User } = require('../models');

const loanController = {

    index: async (req, res) => {
        try {
            const loans = await Loan.findAll({
                include: [
                    { model: User, as: 'user' },
                    { model: Book, as: 'book' }
                ]
            });
            res.json(loans);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno' });
        }
    },

    store: async (req, res) => {
        try {
            const { user_id, book_id, loan_date, return_date } = req.body;

            if (!user_id || !book_id || !loan_date) {
                return res.status(400).json({ message: 'Campos obrigatórios em falta' });
            }

            const loan = await Loan.create({ user_id, book_id, loan_date, return_date });
            res.status(201).json({ message: 'Empréstimo criado', data: loan });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno' });
        }
    },

    update: async (req, res) => {
        try {
            const loan = await Loan.findByPk(req.params.id);
            if (!loan) return res.status(404).json({ message: 'Empréstimo não encontrado' });

            await loan.update(req.body);
            res.json({ message: 'Empréstimo atualizado', data: loan });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno' });
        }
    },

    destroy: async (req, res) => {
        try {
            const loan = await Loan.findByPk(req.params.id);
            if (!loan) return res.status(404).json({ message: 'Empréstimo não encontrado' });

            await loan.destroy();
            res.json({ message: 'Empréstimo eliminado' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno' });
        }
    }
};

module.exports = loanController;