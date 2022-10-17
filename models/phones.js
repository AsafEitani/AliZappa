const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const phone = new Schema({
  name: String,
  manufacturer: String,
  gb: Number,
  color: String,
  dpi: Number,
  price: Number
},{ collection : 'phones' })
 
module.exports = mongoose.model('phone', phone)