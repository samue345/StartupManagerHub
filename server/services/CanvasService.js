class CanvasService{

    constructor(canvasRepository){
        this.canvasRepository = canvasRepository
    }
    async findCanvas(id){
     
        try{
            return await this.canvasRepository.findCanvas(id);
        }
        catch(err){
            console.error(err)
        }
          
    }
    async createCanvas(data){
        try{

            const canvas = await this.canvasRepository.findCanvas(data.startupID);
            canvas ? await this.canvasRepository.updateCanvas(data) : await this.canvasRepository.createCanvas(data);    
        }
        catch(err){
            console.error(err)
        }
    }

}
module.exports = CanvasService