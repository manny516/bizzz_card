const express = require("express");
const router = express.Router();
const {bizzUser} = require('../models/collections/Users');
var bodyParser = require('body-parser');
const app = express();
const jsonParse = bodyParser.json();
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended : true}));


router.post("/", jsonParse, async(req,res) =>{

    try{
        const hash_password = await bcrypt.hash(req.body.password,10);
        const username = req.body.username;
        const email = req.body.email;

        const registerUser = new bizzUser({
            username,
            hash_password,
            email
        });

        await registerUser.save()
        .then(() => res.json("User Created"))
        .catch(err => res.status(400).json('Error' + err));

        res.redirect("http://localhost:3000/login");
    }catch{
        res.redirect("http://localhost:3000/signup");
    }

    console.log(bizzUser.find());
});


module.exports = router;