const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const tv = new Schema({
  name: String,
  manufacturer: String,
  inch: Number,
  price: Number
},{ collection : 'tvs' })
 
module.exports = mongoose.model('tv', tv)