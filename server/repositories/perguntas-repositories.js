const Pergunta = require('../models/Pergunta'); 

class PerguntaRepository {
    
    async createPerguntas(data) {
        try {

            await Pergunta.create(data);
        } 
        catch (error) {
            throw new Error('Erro ao criar novo SWOT: ' + error.message);
        }
    }

    async updatePerguntas(data) {
        try {

            const { startupID, preco, produto, promocao, praca } = data;
            return await Pergunta.updateOne({ startupID }, { preco, produto, promocao, praca }) !== null;
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
    async findPerguntas(startupID) {
        try {

             return await Pergunta.findOne({startupID}).select('preco praca promocao produto').lean();
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
}

module.exports = PerguntaRepository;
