const {Schema, model}=require('mongoose');

const Photo = new Schema({
    title: String,
    description: String,
    img_url: String,
    public_id: String
})

module.exports = model('Photo', Photo)
