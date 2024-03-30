const mongoose = require('mongoose');

    const perguntasSchema = new mongoose.Schema(
      {
        
        startupID:
        {
            type: String,
            required: true
        },
        preco:
        {
            type: String,
            required: true
        },
        produto:
        {
            type: String,
            required: true
        },
        promocao:
        {
            type: String,
            required: true
        },
        praca:
        {
            type: String,
            required: true
        },
      },

      { timestamps: true }
    
    );
    
    module.exports = mongoose.model('Pergunta', perguntasSchema);