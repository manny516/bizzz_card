const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street : String,
    street_two : String,
    city : String,
    province : String,
    zip : Number,
    country : String
})

const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        require: true
    },
    last_name : String,
    company : String,
    phone: [String],
    email : String,
    urls : [String],
    address : [addressSchema],
    birthday : String,
    posted : String,
    updated : String,
    social_links : [String],
    instant_messagers : [String],
    notes: String
});


export const bizzUser = mongoose.model('User', userSchema);
