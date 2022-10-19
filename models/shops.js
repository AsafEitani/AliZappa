const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const shop = new Schema({
  name: String,
  type: String,
  content: String,
  phoneNumber: String,
  email: String,
  website: String,
  address: String,
  lat: Number,
  lon: Number
},{ collection : 'shops' })
 
module.exports = mongoose.model('shop', shop)