const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../Models/User');
const It = require('../Models/It');


router.get('/it', async (req, res) => {

    try{
        const it = await It.find();
        res.json(it);

    }catch(err) {
        console.log("in here");
        res.json({message: err});
    }
});


router.post('/users', (req, res) => {
    console.log(req.body);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.title
    });

    user.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err})
    });
    
});


router.post('/it', (req, res) => {
    console.log(req.body);
    const it = new It({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.title
    });

    it.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err})
    });
    
});





module.exports = router;