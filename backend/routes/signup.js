const express = require("express");
const router = express.Router();
const {bizzUser} = require('../models/collections/Users');
const authSchema = require('../models/Validate_schema');
const bodyParser = require('body-parser');
const app = express();
const jsonParse = bodyParser.json();
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended : true}));


router.post("/", jsonParse, async(req,res) =>{

    try{
        const {error} = authSchema(req.body);
        console.log(error);
        const username = req.body.username;
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password,10);
        const emailExist = await bizzUser.findOne({email: email});
        const usernameExist = await bizzzUser.findOne({username : username})


        if(error) return res.status(409).send({message:error.details[0].message})
        
        if(emailExist) return res.status(409).send({message:"Email: This email address already Exist"})

        if(usernameExist) return res.status(409).send({message:"username: The user name already Exist"})

            
        const registerUser = new bizzUser({
            username,
            password,
            email,
        });

        await registerUser.save()
        .then(() => res.json("User Created"))
        .catch(err => res.status(400).json('Error' + err));
    }catch(error){
        res.status(500).send({message: "Internal Server error"});
    }
});


module.exports = router;