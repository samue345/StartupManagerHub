const Startup = require('../models/Startup');
const Token = require('../models/Token');

class startupRepository{

    async verificaStartupExiste(email)
    {
        const startup_login = await Startup.findOne({email}).lean().select('nome email senha')
        return startup_login;
    }
    async token(_id)
    {
        const startup = await Startup.findOne({ _id }).lean().select('_id nome email');
        return startup;
    }
    async register(data)
    {
        const startup = await Startup.create(data);
        return startup;
    }
    async logout(token, startupID){
        await Token.findOneAndDelete({token, startupID}).catch(err => console.log(err));
    }
    
    async createToken(token, startupID){
        await Token.create({token, startupID}).catch(err => console.log(err))
    }
}


module.exports = startupRepository