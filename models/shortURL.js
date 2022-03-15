const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URLSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  urlshort: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('URL', URLSchema)