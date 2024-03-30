const PerguntasRepo = require('../repositories/perguntas-repositories')
const PerguntasService = require('../services/PerguntasService')

const PerguntasFactory = []

PerguntasFactory.generateInstancePerguntas = () =>
{
    const perguntasRepo = new PerguntasRepo();
    return new PerguntasService(perguntasRepo)
}

module.exports = PerguntasFactory;