const express = require("express");
const router = require("express").Router();
const {bizzUser} = require("../models/collections/Users");
const authSchema = require('../models/Validate_schema');
const bodyParser = require('body-parser');
const app = express();
const jsonParse = bodyParser.json();
const bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({extended : true}));

router.post("/", jsonParse, async(req,res) =>{

    try{
        console.log("login page");
        const user = await bizzUser.findOne({username: req.body.username});
        const validatePassword = await bcrypt.compare(
            req.body.password, 
            user.password
        )
        console.log("userPAssworder",user.password)
        console.log("request PAssword", req.body.password);
        console.log(validatePassword);

        // console.log(user.password);
        // // const {error} = validate(req.body);
        // if(error){
        //     return res.status(400).send({message: error.details[0].message})
        // }
       
        // if(!user){
        //     return res.status(401).send({ message: "Invalid Email or Password"})
        // }
        

        // console.log(validatePassword);

        if(!validatePassword){
            return res.status(401).send({ message: error.details[0].message})
        }else{  
            return res.status(200).send({message: "Successfully logged in"})
        }
    }catch(error){
        res.status(500).send({message: "Internal Server error"});
    }

})

module.exports = router