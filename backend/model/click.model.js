const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clickSchema = new Schema({
  click: { type: int, required: true },
  description: { type: String, required:true },
}, {
  timestamps: true,
});

const Click = mongoose.model('Click', clickSchema);

module.exports = Click;