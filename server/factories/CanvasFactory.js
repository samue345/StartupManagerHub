const CanvasRepo = require('../repositories/canvas-repositories')
const CanvasService = require('../services/CanvasService')

const CanvasFactory = []

CanvasFactory.generateInstanceCanvas = () =>
{
    const canvasRepo = new CanvasRepo();
    const canvasService = new CanvasService(canvasRepo)
    return canvasService;
}

module.exports = CanvasFactory;