const Memo = require("./model.js");

// Create education record
exports.create = (req, res)=>{
    const memo = new Memo({
        author: req.body.author,
        text: req.body.text,
    });
    memo.save()
        .then(data => {
            console.log("Saved successfully");
            res.send(data);
        });
}
//res.json({message: "api post fine with id "+req.params.id});}

// Retrieve all education records
exports.findAll = (req, res)=>{
    Memo.find().exec()
        .then(data => {
            console.log("Found All");
            res.send(data);
        });
}
//res.json({message: "api get fine with all"});}

// Retrieve education record by id
exports.findOne = (req, res)=>{
    Memo.findById(req.params.id).exec()
        .then(data => {
            console.log("Found One");
            res.send(data);
        });
}
//res.json({message: "api get fine with id "+req.params.id});}

// Update education record by id
exports.update = (req, res)=>{
    Memo.findByIdAndUpdate(req.params.id, {
        author: req.body.author,
        text: req.body.text,
    }, {
        upsert: true,
        new: true,
    })
        .then(data => {
            console.log("Found One & Updated");
            res.send(data);
        });
}
//res.json({message: "api put fine with id "+req.params.id});}

// Delete education record by id
exports.delete = (req, res)=>{
    Memo.findByIdAndRemove(req.params.id).exec()
        .then(data => {
            console.log("Found One & Removed");
            res.send(data);
        });
}
//res.json({message: "api delete fine with id "+req.params.id});}