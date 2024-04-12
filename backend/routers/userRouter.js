const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    console.log(req.body);

    // to save data in mongodb
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getall', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes url parameter
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put( '/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/authenticate', (req,res) => {
    Model.findOne(req,res)
    .then((result) => {
        if(result){
            const payload = { _id: result._id, email: result.email, role: result.role};

            //create jwt token
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expireIn: '3 days'},
                (err, token) => {
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                    }else{
                        res.status(200).json({ token: token, avatar: result.avatar});
                    }
                }
            )
        }else{
            res.status(401).json({ token: token, avatar: result.avatar});
        }
    }).catch((err) => {
    console.log(err);
    res.status(500).json(err);    
    });
})

module.exports = router;