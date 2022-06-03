const express = require("express");
const router = express.Router();
const {bizzUser} = require('../models/collections/Users');
const bodyParser = require('body-parser');
const app = express();
const jsonParse = bodyParser.json();
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended : true}));


router.post("/", jsonParse, async(req,res) =>{

    try{
        const password = await bcrypt.hash(req.body.password,10);
        const username = req.body.username;
        const bizzzcard = req.body.bizzzcard;

        const registerUser = new bizzUser({
            username,
            password,
            bizzzcard
        });

        await registerUser.save()
        .then(() => res.json("User Created"))
        .catch(err => res.status(400).json('Error' + err));
    }catch{
        res.redirect("http://localhost:3000/signup");
    }
});


module.exports = router;