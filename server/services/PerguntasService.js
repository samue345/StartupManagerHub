class PerguntasService
{
    constructor(perguntasRepository){
        this.perguntasRepository = perguntasRepository
    }

    async findPerguntas(id){
     
        try{
            
            return await this.perguntasRepository.findPerguntas(id);
        }
        catch(err){
            console.error(err)
        }
          
    }
    
    async createPerguntas(data){
     
        try{

            const canvas = await this.perguntasRepository.findPerguntas(data.startupID);
            canvas ? await this.perguntasRepository.updatePerguntas(data) : await this.perguntasRepository.createPerguntas(data);         
        }
        catch(err){
            console.error(err)
        }
          
    }

}
module.exports = PerguntasService