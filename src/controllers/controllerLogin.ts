import pool from "../bdConfig";
import bcrypt from "bcrypt";
import utils from "./utils";


const login = async (req:any, res:any) => {

  const {username, password} = await req.body;

    // Validaciones del username
    const valiUser = utils.validateUsername(username);
    if(!valiUser.validate) {
      res.json(valiUser.message)
    } else {
      // Validaciones del password
      let valiPassword = utils.validatePassword(password);
      if(!valiPassword.validate) {
        res.json(valiPassword.message)
    } else {
      
        try {
          
          const query = `SELECT * FROM users WHERE username = "${username}"`;
          pool.query(query, async(err, resu)=>{
            if(err) throw err;

            const dataDB = await resu;

            if(dataDB.length === 0) {

              res.json("Username not exist!")
            } else {
              console.log(dataDB[0].password);
              console.log(password);

              const isValidPassword = await bcrypt.compare(password, dataDB[0].password)
              console.log(isValidPassword)
              res.json("User Logged!")
            }

          })
          
        } catch (error) {
          res.json("Error")
        }
    }
    }
  




}

export default {
  login
} 