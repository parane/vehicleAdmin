import mongoose from 'mongoose';

let Schema = mongoose.Schema

let user = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

export const User = mongoose.model('User',user)