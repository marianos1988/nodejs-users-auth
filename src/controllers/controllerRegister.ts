import pool from "../bdConfig"

const register = async (req: any,res: any) => {

  const data = await req.body;
  const { username, password } = data;
 

  // Validaciones del username
  if(typeof username !== "string") throw new Error("username must be a string");
  else if(username.length < 3) throw new Error("username must be at least 3 characters long");
  
  // Validaciones del password
  else if(typeof password !== "string") throw new Error("username must be a string");
  else if(password.length < 6) throw new Error("password must be at least 6 characters long");

  else {

    try {
      //Asegurar que username que no existe
      const query = `SELECT * FROM users WHERE username = "${username}"`;
      pool.query(query, async (err,resu)=>{

        if(err) throw err;

        const repeatUser = await resu[0];


        if(repeatUser.username === username) {

          console.log("username already exists");
        } else {

          res.json("Todo ok")
        }




      })
    } catch (error) {
      throw new Error("asd")
    }

  }
}


export default {
  register
}