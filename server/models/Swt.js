const mongoose = require('mongoose');

const swtsSchema = new mongoose.Schema(
    {
    
      startupID:
      {
          type: String,
          required: true
      },
      strength: 
      {
        type: String,
        required: true,
     
      },
      weakness: 
      {
        type: String,
        required: true,
      },
      bullseye: 
      {
        type: String,
        required: true,
      },
    
      threats:
      {
        type: String,
        required: false
      },
           
    },
    {
      timestamps: true
    }
    
    );
    
    module.exports = mongoose.model('Swt', swtsSchema);