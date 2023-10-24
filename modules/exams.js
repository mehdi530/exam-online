require("mysql2");
require("dotenv").config();
const pool = require("./connection");
const generalFun= require('../controllers/functions');

const exam_get_all_by_userid = async (id) => {
    const [result] = await pool.query(
      "select user_id,question_ids,name,time,number,dis,type from exam where id=? ",
      [id]
    );
    console.log(result[0]);
  };

  exam_get_all_by_userid(1)