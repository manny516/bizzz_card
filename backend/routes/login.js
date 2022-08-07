const bodyParser = require("body-parser");
const express = require("express");
const router = require("express").Router();
const {bizzzUser,validate} = require("../models/collections/Users");
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

router.post("/",async (req,res) =>{

    try{
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message})
        }
        const user = await bizzzUser.findOne({username: req.body.username});
        if(!user){
            return res.status(401).send({ message: "Invalid Email or Password"})
        }
        const validatePassword = await bcrypt.compare(
            req.body.password, 
            user.password
        )

        if(!validatePassword){
            return res.status(401).send({ message: error.details[0].message})
        }

        res.status(200).send({message: "Successfully logged in"})
    }catch{

    }

})

module.exports = router