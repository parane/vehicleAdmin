import mongoose from 'mongoose';

let Schema = mongoose.Schema

let wizard = new Schema({
    name: String,
    house: String,
    pet: String
});

export const Wizard = mongoose.model('Wizard',wizard)