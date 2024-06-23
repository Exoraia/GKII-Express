'use strict';
const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const envConfig = require('dotenv').config({path: './.env'});

exports.authenticate = function(req, res) {
    if((req.body.constructor == Object && Object.keys(req.body).length === 0) || req.body.username == null || req.body.password == null ){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.authenticate(req.body.username, req.body.password, function(err, user) {
            if (err)
            res.send(err);
            // authentication fails
            if (user.length === 0) {
                return res.status(401).send({ error:true, message: 'Authentication failed. User not found.' });
            }
            // authentication successful
            const username = user[0].username;
            const id = user[0].id;
            const token = jwt.sign({ id: id, username: username }, envConfig.parsed.JWT_SECRET, {expiresIn: '1d'});
            console.log("token: ",token);
            res.status(200).send({message: true, token: token});
        })
    }
}

exports.authorize = function(req, res, next) {
    const authHeader = req.header('Cookie');
    console.log(authHeader);
    if (!authHeader) return res.status(401).json({ error: 'Access denied' });
    
    const token = authHeader.split(' ')[1]; // remove the Bearer prefix

    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, envConfig.parsed.JWT_SECRET);
     req.username = decoded.username;
     req.id = decoded.id;
     next();
     } catch (error) {
     return res.status(401).json({ error: 'Invalid token' });
     }
}