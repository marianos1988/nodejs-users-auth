import pool from "../bdConfig";
import bcrypt, { hashSync } from "bcrypt";
import utils from "./utils";


const login = async (req:any, res:any) => {

  const {username, password} = await req.body;

    // Validaciones del username
    const valiUser = utils.validateUsername(username);
    if(!valiUser.validate) {
      res.json(valiUser.message)
    } else {
      // Validaciones del password
      const valiPassword = utils.validatePassword(password);
      if(!valiPassword.validate) {
        res.json(valiPassword.message)
    } else {
      
        const hashedPassword = hashSync(password,10);

        try {
          
          const query = `SELECT * FROM users WHERE username = "${username}"`;
          pool.query(query, async(err, resu)=>{
            if(err) throw err;

            const dataDB = await resu;

            console.log(dataDB);
            res.json("User Logged!")
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