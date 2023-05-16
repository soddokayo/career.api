//const mysql = require("../db.js");
const Education = require("./model.js");

// Create education record
exports.create = (req, res)=>{
    if(!req.body.adm_date || !req.body.grad_date || !req.body.school || !req.body.location){
        res.status(400).send({
            message: "error: content is empty"
        });
    };
    const education = new Education({
        adm_date : req.body.adm_date,
        grad_date : req.body.grad_date,
        school : req.body.school,
        location : req.body.location,
        activity : req.body.activity,
        note : req.body.note,
    });

    Education.create(education, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Error occurred with unknown reason"
            });
        }
        else res.send('Record created');
    });
};

// Retrieve all education records
exports.findAll = (req, res)=>{
    Education.findAll((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Error occurred with unknown reason"
            });
        }
        else res.send(data);
    });
};

// Retrieve education record by id
exports.findOne = (req, res)=>{res.json({message: "api get fine with id "+req.params.id});}

// Update education record by id
exports.update = (req, res)=>{res.json({message: "api put fine with id "+req.params.id});}

// Delete education record by id
exports.delete = (req, res)=>{res.json({message: "api delete fine with id "+req.params.id});}