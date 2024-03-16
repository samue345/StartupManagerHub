const assert = require('node:assert');
const sinon = require('sinon');
const StartupService = require('../services/StartupService')

describe('testar login de usuario', () =>{

        const email = 'valid-email@example.com';
        const password = 'valid-password';

        const startupRepository = {
          verificaStartupExiste: sinon.stub().withArgs(email).resolves(null)

        };
        const startupService = new StartupService(startupRepository);
  
    
    it('testar se o email existe', async () => {
      const expected = false;
      
      const result = await startupService.verificaStartupExiste(email, password);

      assert.deepStrictEqual(result, expected);



    })
    

})