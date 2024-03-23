var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class StartupService{

    constructor(startupRepository){
        this.startupRepository = startupRepository
    }

    async verificaStartupExiste(email, password){
        const retorno = {};
        retorno.startup = await this.startupRepository.verificaStartupExiste(email);
        
        if(!retorno.startup)
          return retorno.startup !== null;
 
        const result = await bcrypt.compare(password, retorno.startup.senha);
        
        if(result === false)
          return false;
    
        const accessToken = jwt.sign({ _id: retorno.startup._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ _id: retorno.startup._id }, process.env.JWT_REFRESH, { expiresIn: '30d' })
        this.startupRepository.createToken(refreshToken, retorno.startup._id);
        
        retorno.accessToken= accessToken
        retorno.refreshToken = refreshToken
        return retorno;
          
 
    }
   
    async register(data){

        try {
        
            const new_startup = {nome: data.nome, email: data.email, senha: data.senha}, result = {};

            result.startup = await this.startupRepository.verificaStartupExiste(new_startup.email);
            if(result.startup)
              return false;

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(new_startup.senha, salt);
            new_startup.senha = hash;

            result.startup = await this.startupRepository.register(new_startup);
            const accessToken = jwt.sign({ _id: result.startup._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign({ _id: result.startup._id }, process.env.JWT_REFRESH, { expiresIn: '30d' });
           
            this.startupRepository.createToken(refreshToken, result.startup._id);
            result.accessToken= accessToken;
            result.refreshToken = refreshToken;
            return result;
          
        } 
        catch (error) {
          console.error('Erro ao criar usuário:', error);
        }                 
 
    }
    async logout(data){
  
        try 
        {
          const {startupID, refreshToken} = data;
          await this.startupRepository.logout(refreshToken, startupID);
          return { message: "Logout successful" }

        }

        catch (error){
          console.error(error);
        }
    }

    async token(id) 
    {
        try
        {
            const result = await this.startupRepository.token(id);
            return result;
      
        }

        catch (error){
            console.error(error);
        }



    
    }

}
module.exports = StartupService