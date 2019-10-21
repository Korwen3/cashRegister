const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Consommable = new Schema({
   name: {
      type: String
   },
   price: {
      type: Number
   },
   type: {
    type: String
 }
}, {
   collection: 'consommables'
})

module.exports = mongoose.model('Consommable', Consommable)
