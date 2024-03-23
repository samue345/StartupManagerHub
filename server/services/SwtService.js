class StartupService{

    constructor(swtRepository){
        this.swtRepository = swtRepository
    }
    async finSwt(id){
     
        try{
            console.log(id)
            //const swt = await this.swtRepository.findSwt(id);
            return swt;    
        }
        catch(err){
            console.error(err)
        }
          
    }
    async createSwt(data){
     
        try{

            const swt = await this.swtRepository.findSwt(data.startupID);
            if(swt)
              await this.swtRepository.updateSwt(data);
            else
              await this.swtRepository.createSwt(data);
    
        }
        catch(err){
            console.error(err)
        }
          
    }

}
module.exports = StartupService