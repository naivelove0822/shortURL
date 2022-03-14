const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortURLSchema = new Schema({
  URL: {
    type: URL,
    required: true
  }
})
module.exports = mongoose.model('URL', shortURLSchema)