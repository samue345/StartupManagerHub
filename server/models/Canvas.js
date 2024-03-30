const mongoose = require('mongoose');

const canvasSchema = new mongoose.Schema(
    {
    
      startupID:
      {
          type: String,
          required: true
      },
      keyPartners: 
      {
        type: String,
        required: true,
     
      },
      keyActivities: 
      {
        type: String,
        required: true,
      },
      valuePropositions: 
      {
        type: String,
        required: true,
      },
      relatiCustomers:
      {
        type: String,
        required: false
      },
      customerSegment: 
      {
        type: String,
        required: true,
      },
      keyResources: 
      {
        type: String,
        required: true,
      },
      channel:
      {
        type: String,
        required: false
      },
      costs:
      {
        type: String,
        required: false
      }, 
      revenues:
      {
        type: String,
        required: false
      },
           
    },
    {
      timestamps: true
    }
    
    );
    
    module.exports = mongoose.model('Canva', canvasSchema);