const sql = require("../db.js");

// MYSQL 테이블 생성 정보 :
// mysql> create table education (
//     -> id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     -> adm_date date NOT NULL,
//     -> grad_date date NOT NULL,
//     -> school varchar(255) NOT NULL,
//     -> location varchar(255) NOT NULL,
//     -> activity text NULL,
//     -> note text NULL
//     -> ) ENGINE=InnoDB;

const Education = function(education){
    this.adm_date = education.adm_date;
    this.grad_date = education.grad_date;
    this.school = education.school;
    this.location = education.location;
    this.activity = education.activity;
    this.note = education.note;
};

Education.create = (newEducation, result) => {
    sql.query("INSERT INTO education SET ?", newEducation, (err, res) => {
        if(err){
            console.log("error occurred: ", err);
            result(err, null);
            return;
        }
        console.log("Created education record: ", {id: res.insertId, ...newEducation});
        result(null, {id: res.insertId, ...newEducation});
    });
};
// CREATE 예시 JSON (POST "[URL]/api/education") : 
// {
//     "adm_date" : "2010-03-01",
//     "grad_date" : "2012-02-01",
//     "school" : "경산과학고등학교",
//     "location" : "서울",
//     "activity" : "학생회장, 정보과학 R&E, 정보과학 동아리, 물리학 전공",
//     "note" : "테스트"
// }

Education.findAll = (result) => {
    sql.query("SELECT * FROM education", (err, res) => {
        if(err){
            console.log("error occurred: ", err);
            result(err, null);
            return;
        }
        console.log("All education records: ", res);
        result(null, res);
    });
};

module.exports = Education;