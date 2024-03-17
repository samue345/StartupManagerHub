const assert = require('node:assert');
const sinon = require('sinon');
const StartupService = require('../services/StartupService');
const { ObjectId } = require('mongoose').Types;


describe('testar login de usuario', () =>{
    describe('#login', () => {

        const email = 'valid-email@example.com';
        const password = 'valid-password';

        const startupRepository = {
          verificaStartupExiste: sinon.stub().withArgs(email).resolves(null)

        };
        const startupService = new StartupService(startupRepository);

    
        it('testar se o email não existe', async () => {
          const expected = false;
          
          const result = await startupService.verificaStartupExiste(email, password);

          assert.deepStrictEqual(result, expected);



        })

    })
      
    describe('#register', () => {
      const mockdatabase = {
        _id: new ObjectId('65e2a4316507c8965d526b2c'),
        nome: 'aluEasy',
        email: 'alueasy75@gmail.com',
        senha: '$2a$10$xVZxpcj2KUDHxbKekRLrF.HOyUgkRN7Or1jCxKzD09Mk.NBdtbrau'
      }
      const startupRepository = {
        verificaStartupExiste: sinon.stub().resolves(mockdatabase)

      };

      const startupService = new StartupService(startupRepository);
      it('testar se o email existe', async () => {

        const new_startup = {

          nome: 'aluEasy',
          email: 'alueasy75@gmail.com',
          senha: 'Dostoievski12!',  
        };

        const expected = false;
        const result = await startupService.register(new_startup);
        assert.deepStrictEqual(result, expected);
      })

    })

})