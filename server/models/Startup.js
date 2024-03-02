const mongoose = require('mongoose');

const startupsSchema = new mongoose.Schema(
    {
    
      sub: String,
      nome: 
      {
        type: String,
        required: true,
     
      },
      email: 
      {
        type: String,
        required: true,
      },
      senha: 
      {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255     
      },
    
      picture:
      {
        type: String,
        required: false
      },
           
    },
    {
      timestamps: true
    }
    
    );
    
    module.exports = mongoose.model('Startup', startupsSchema);