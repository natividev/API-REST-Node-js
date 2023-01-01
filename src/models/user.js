const mongoose = require ('mongoose');

// Crear esquema

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});



module.exports = mongoose.model('User', userSchema);