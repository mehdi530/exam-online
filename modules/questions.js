require("mysql2");
require("dotenv").config();
const pool = require("./connection");
const generalFun= require('../controllers/functions');

const question_get_by_id = async (id) => {
    const [result] = await pool.query(
      "select id,id_user,qcaption,q1,q2,q3,q4,qans from question where id=? ",
      [id]
    );
    console.log(result[0]);
  };

  const question_get_answer_by_id = async (id) => {
    const [result] = await pool.query(
      "select qans from question where id=? ",
      [id]
    );
    console.log(result[0]);
  };

  const question_get_userallQuestion_byiduser = async (id_user) => {
    const [result] = await pool.query(
    "select id,id_user,qcaption,q1,q2,q3,q4,qans from question where id_user=? ",
    [id_user]
    );

    generalFun.print_all_array(result)   
   

  };

  const question_get_allanswer_by_id = async (id) => {
    const [result] = await pool.query(
      "select q1,q2,q3,q4 from question where id=? ",
      [id]
    );
    console.log(result[0]);
  };

  const question_get_allanswer_by_question = async (qcaption) => {
    const [result] = await pool.query(
      "select q1,q2,q3,q4 from question where qcaption=? ",
      [qcaption]
    );
    console.log(result[0]);
  };

  const question_get_id_by_question = async (qcaption) => {
    const [result] = await pool.query(
      "select id from question where qcaption=? ",
      [qcaption]
    );
    console.log(result[0]);
  };

  const question_add_new = async (id_user,qcaption,q1,q2,q3,q4,qans) => {
    // const temp = await user_get_by_email(email)
  
    // if(temp==="not found"){
    const result = await pool.query(
      "insert into questin (id_user,qcaption,q1,q2,q3,q4,qans) values(?,?,?,?,?,?,?)",
      [id_user,qcaption,q1,q2,q3,q4,qans]
    );
    // }else{
    // console.log("user is exist ... please goto login")
    // }
  };

 //question_get_by_id(1);
//question_get_answer_by_id(1);
//question_get_userallQuestion_byid(1);
//question_get_allanswer_by_id(2);
//question_get_allanswer_by_question("question one is test ?")
//question_get_id_by_question("question one is test ?")