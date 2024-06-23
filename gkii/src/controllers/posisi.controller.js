'use strict';
const Posisi = require('../models/posisi.model');

exports.findAll = function(req, res) {
    Posisi.findAll(function(err, posisi) {
        if (err)
        res.send(err);
        res.send(posisi);
    });
};

exports.create = function(req, res) {
    const new_posisi = new Posisi(req.body);
    delete new_posisi.id; 

    //handles null error
    if(
        new_posisi.id_jabatan.length === 0 || new_posisi.id_member.length === 0
    ){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Posisi.create(new_posisi, function(err, posisi) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Posisi added successfully!",data:posisi});
        });
    }
};

exports.search = function(req, res) {
    if (req.query.id) {
        Posisi.findById(req.query.id, function(err, posisi) {
            if (err)
            res.send(err);
            res.json(posisi);
        });
    } else if (req.query.name) {
        Posisi.findByName(req.query.name, function(err, posisi) {
            if (err)
            res.send(err);
            res.json(posisi);
        });
    } else {
        res.send(err)
    }
};

exports.findByName = function(req, res) {
    Posisi.findByName(req.params.name, function(err, posisi) {
        if (err)
        res.send(err);
        res.json(posisi);
    });
};

exports.findById = function(req, res) {
    Posisi.findById(req.params.id, function(err, posisi) {
        if (err)
        res.send(err);
        res.json(posisi);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        console.log(req.params.id);
        console.log(req.body);
        Posisi.update(req.params.id, new Posisi(req.body), function(err, posisi) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Posisi successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Posisi.delete( req.params.id, function(err, posisi) {
        if (err)
        res.send(err);
        res.json({ error:false, message: 'Posisi successfully deleted' });
    });
};