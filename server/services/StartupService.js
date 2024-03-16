var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class StartupService{

    constructor(startupRepository){
        this.startupRepository = startupRepository
    }

    async verificaStartupExiste(email, password){
        let retorno = {};
        retorno.startup = await this.startupRepository.verificaStartupExiste(email);
        
        if(!retorno.startup)
          return retorno.startup !== null;
 
        const result = await bcrypt.compare(password, retorno.startup.senha);
        
        if(result === false)
          return res.status(400).json({status: 400})
    
        const accessToken = jwt.sign({ _id: retorno.startup._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ _id: retorno.startup._id }, process.env.JWT_REFRESH, { expiresIn: '30d' })
        this.startupRepository.token(refreshToken, retorno.startup._id);
        
        retorno.accessToken= accessToken
        retorno.refreshToken = refreshToken
        return retorno;
                         
 
    }
}
module.exports = StartupService