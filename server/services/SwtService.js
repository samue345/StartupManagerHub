class StartupService{

    constructor(swtRepository){
        this.swtRepository = swtRepository
    }
    async findSwt(id){
     
        try{
            const swt = await this.swtRepository.findSwt(id);
            return swt;    
        }
        catch(err){
            console.error(err)
        }
          
    }
    async createSwt(data){
     
        try{

            const swt = await this.swtRepository.findSwt(data.startupID);
            swt ? await this.swtRepository.updateSwt(data) : await this.swtRepository.createSwt(data);
              
        }
        catch(err){
            console.error(err)
        }
          
    }

}
module.exports = StartupService