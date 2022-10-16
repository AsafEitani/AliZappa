const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const guitar = new Schema({
  name: String,
  manufacturer: String,
  type: String,
  stringCount: Number,
  price: Number
},{ collection : 'guitars' })
 
module.exports = mongoose.model('guitar', guitar)