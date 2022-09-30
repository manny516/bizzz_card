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
        const username = req.body.username;
        const email = req.body.email;
        const bizzzProfile = req.body.bizzzcard;
        const user = await bizzUser.findOne({email: email});
        const userNameCheck = await bizzUser.findOne({username: username});
        const password = await bcrypt.hash(req.body.password,10);



        if(error) return res.status(409).send({message:error.details[0].message});
        
        if(userNameCheck) return res.status(409).send({message: "username This user name already Exist"});

        if(user) return res.status(409).send({message:"email This Email address already Exist"});
        

            
        const registerUser = new bizzUser({
            username,
            password,
            email,
            bizzzProfile
        });

        await registerUser.save()
        .then(() => res.json("User Created"))
        .catch(err => res.status(400).json('Error' + err));
         
    }catch(error){
        res.status(500).send({message: "Internal Server error"});
    }
});


module.exports = router;