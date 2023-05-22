const mongoose = require("mongoose");
const dotenv = require("dotenv");

// 모델 정의
const memoSchema = new mongoose.Schema({
    author: String,
    text: String,
}, { 
    collection: 'memo', 
    timestamps: true, 
});

const Model = mongoose.model('modMemo', memoSchema);

// DB 연결
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB conected"))
    .catch((err) => {console.log(err);});

module.exports = Model;
