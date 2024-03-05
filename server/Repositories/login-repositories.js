const Startup = require('../models/Startup');
const Token = require('../models/Token');

class startupRepository{

    async verificaStartupExiste(email){
        const startup_login = await Startup.findOne({email}).lean().select('nome email senha')
        return startup_login;
    }
    async token(token, startupID){
        await Token.create({token, startupID})
        .catch(err => console.log(err))
    }
}


module.exports = startupRepository