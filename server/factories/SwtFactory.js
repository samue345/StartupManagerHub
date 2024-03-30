const SwtRepo = require('../repositories/swt-repositories')
const SwtService = require('../services/SwtService')

const SwtFactory = []

SwtFactory.generateInstanceSwt = () =>
{
    const swtRepo = new SwtRepo();
    const swtService = new SwtService(swtRepo)
    return swtService;
}
module.exports = SwtFactory;