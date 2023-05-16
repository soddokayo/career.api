const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 테이블 별로 별도 라우터가 api 처리
app.use("/api/education", require("./app/education/route.js"));

app.get("/", (req, res)=>{
    res.json({message: "Server is running on port "+PORT});
});

app.listen(PORT, ()=>{
    console.log("Server started on port "+PORT);
})