const mongoose = require('mongoose');

let Schema = mongoose.Schema

let vehicle = new Schema({
  title: String,
  description: String,
  price: Number
});

export const Vehicle = mongoose.model('Vehicle',vehicle)