const Swt = require('../models/Swt'); 

class SwtRepository {
    async createSwt(data) {
        try {
            await Swt.create(data);
        } 
        catch (error) {
            throw new Error('Erro ao criar novo SWOT: ' + error.message);
        }
    }

    async updateSwt(data) {
        try {

            const { startupID, strength, weakness, bullseye, threats } = data;
            await Swt.updateOne({ _id: startupID }, { strength, weakness, bullseye, threats });
            return true; 
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
    async findSwt(startupID) {
        try {

           const swt = await Swt.findOne({startupID});
            return swt; 
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
}

module.exports = SwtRepository;
