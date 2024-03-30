const Canvas = require('../models/Canvas'); 

class CanvasRepository {
    async createCanvas(data) {
        try {
            await Canvas.create(data);
        } 
        catch (error) {
            throw new Error('Erro ao criar novo SWOT: ' + error.message);
        }
    }

    async updateCanvas(data) {
        try {

            const { 
                startupID, 
                keyPartners, 
                keyActivities, 
                valuePropositions, 
                relatiCustomers,
                customerSegment, 
                keyResources, 
                channel, 
                costs, 
                revenues
            } = data;
            return await Canvas.updateOne({ startupID }, 
            { 
              keyPartners, 
              keyActivities, 
              valuePropositions, 
              relatiCustomers, 
              customerSegment, 
              keyResources, 
              channel, 
              costs, 
              revenues 
            }) !== null;
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
    async findCanvas(startupID) {
        try {

             return await Canvas.findOne({startupID})
            .select('keyPartners keyActivities valuePropositions relatiCustomers customerSegment keyResources channel costs revenues')
            .lean();
        } 
        catch (error) {
            throw new Error('Erro ao atualizar SWOT: ' + error.message);
        }
    }
}

module.exports = CanvasRepository;
