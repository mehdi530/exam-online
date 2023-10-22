require("mysql2");
require("dotenv").config();
const pool = require("./connection");

const user_get_by_id = async (id) => {
  const [result] = await pool.query(
    "select id,name,email,active,cdate,ctime,tell,dis from users where id=? ",
    [id]
  );
  console.log(result[0]);
};

const user_get_by_email = async (email) => {
  const result = await pool.query(
    "select id,name,email,active,cdate,ctime,tell,dis from users where email=? ",
    [email]
  );
  if (Object.keys(result[0]).length >= 1) {
    console.log(result[0]);
  } else {
    //
    console.log("false");
  }
};

const user_add_new = async (name, pass, email) => {
  // const temp = await user_get_by_email(email)

  // if(temp==="not found"){
  const result = await pool.query(
    "insert into users (name,pass,email) values(?,?,?)",
    [name, pass, email]
  );
  // }else{
  // console.log("user is exist ... please goto login")
  // }
};

const user_login = async (email, pass) => {
  const result = await pool.query(
    `select email from users where email=? AND password=? `,
    [email, pass]
  );

  if (Object.keys(result[0]).length >= 1) {
    console.log(result[0]);
  } else {
    console.log("false");
  }
};

console.log(user_get_by_id(1));
