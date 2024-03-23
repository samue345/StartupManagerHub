const SwtRepo = require('../repositories/swt-repositories')
const SwtService = require('../services/SwtService')

const SwtController = []

SwtController.generateInstanceSwt = () =>
{
    const swtRepo = new SwtRepo();
    const swtService = new SwtService(swtRepo)
    return swtService;
}
SwtController.generateInstanceSwtFind = () =>
{
    const swtRepo = new SwtRepo();
    const swtService = new SwtService(swtRepo)
    return swtService;
}
module.exports = SwtController;