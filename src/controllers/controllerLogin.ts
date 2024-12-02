import pool from "../bdConfig";
import bcrypt from "bcrypt";
import utils from "./utils";
import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../parameters/parameters";



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

              // Compara la contraseña
              const isValidPassword = bcrypt.compareSync(password, dataDB[0].password)
              
              if(isValidPassword) {

                //Cuando logeas se genera el JSON WEB TOKEN
                const token = jwt.sign({
                  id: dataDB[0].id,
                  username: dataDB[0].username
                }, 
                SECRET_JWT_KEY,
                {
                  expiresIn: "1h"
                }
              )
              console.log(token)
                res
                .cookie("access_token",token,{
                  httpOnly: true, // La cookie solo se puede acceder en el servidor
                  secure: process.env.Node = "production", // la cookie solo se puede acceder https
                  sameSite: "strict", // la cookie solo se puede acceder en el mismo dominio
                  maxAge: 1000 * 60 * 60 // la cookie tiene un tiempo de validez de 1 hora
                })
                .json({
                  message: "User Logged!",
                  token: token
                })
              } else {
                res.json("Incorrect Password");
              }
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