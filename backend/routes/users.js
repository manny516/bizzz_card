const express = require("express");
const router = express.Router();
const {bizzUser} = require('../models/collections/Users');
var bodyParser = require('body-parser');
const app = express();
const jsonParse = bodyParser.json();
app.use(bodyParser.urlencoded({extended: true}));

//Api Routes
router.get("/", (req,res) =>{
    bizzUser.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err ))
});

router.get("/:id", (req,res)=>{
    bizzUser.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err))
});
    


router.post("/add",jsonParse, async (req,res) =>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const company = req.body.company;
    const phone = req.body.phone;
    const email = req.body.email;
    const urls = req.body.urls;
    const address = req.body.address;
    const birthday = req.body.birthday;
    const posted = req.body.posted;
    const updated = req.body.updated;
    const social_links = req.body.social_links;
    const instant_messagers = req.body.instant_messagers;
    const notes = req.body.notes;

    const newUser = new bizzUser({
        first_name,
        last_name,
        company,
        phone,
        email,
        urls,
        address,
        birthday,
        posted,
        updated,
        social_links,
        instant_messagers,
        notes
    });
    await newUser.save() 
    .then(() => res.json("user Added"))
    .catch(err => res.status(400).json('Error: ' + err ))
});

router.post("/update/:id", async (req,res)=>{
    bizzUser.findById(req.params.id)
    .then(bizzzCards =>{
        bizzzCards.first_name = req.body.first_name;
        bizzzCards.last_name = req.body.last_name;
        bizzzCards.company = req.body.company;
        bizzzCards.phone = req.body.phone;
        bizzzCards.email = req.body.email;
        bizzzCards.urls = req.body.urls;
        bizzzCards.address = req.body.address;
        bizzzCards.birthday = req.body.birthday;
        bizzzCards.posted = req.body.posted;
        bizzzCards.updated = Date.parse(req.body.date);
        bizzzCards.social_links = req.body.social_links;
        bizzzCards.instant_messagers = req.body.instant_messagers;
        bizzzCards.notes = req.body.notes;

        bizzzCards.save()
        .then(() => res.json('User Updated'))
        .catch( err => res.status(400).json("Error:" + err))
    })
    .catch(err => res.status(400).json('Errors' + err))
});

router.delete("/remove/:id", async(req,res)=>{
    try{
        const removeRecord = await bizzUser.findByIdAndDelete(req.params.id);
        console.log(removeRecord);
    }catch(e){
        console.log(e.message);
    }

});

// router.delete("/remove/", jsonParse, async(req,res)=>{
//     const idList = req.body.idList;
//     try{
//         const removeRecord = await bizzUser.deleteMany(idList);
//         console.log(removeRecord);
//     }catch(e){
//         console.log(e.message);
//     }

// })
module.exports = router;