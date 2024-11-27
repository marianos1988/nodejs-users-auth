import pool from "../bdConfig";
import bcrypt from "bcrypt"; //Para hashear las contraseñas


const register = async (req: any,res: any) => {

  const data = await req.body;
  const { username, password } = data;


  // Validaciones del username
  if(typeof username !== "string") res.json("username must be a string");
  else if(username.length < 3) res.json("username must be at least 3 characters long");
  
  // Validaciones del password
  else if(typeof password !== "string") res.json("username must be a string");
  else if(password.length < 6) res.json("password must be at least 6 characters long");

  else {

    try {
      //Asegurar que username que no existe
      const query = `SELECT * FROM users WHERE username = "${username}"`;
      pool.query(query, async (err,resu)=>{

        if(err) throw err;

        const data = await resu;
        
        //Hashear contraseña
        const hashedPassword = bcrypt.hashSync(password, 10); //El numero 10 es el nivel de codificacion de la pass, mayor es el numero mejor es la codificaiocn pero es mas lento el proceso
        //El hashSync bloquea el thread principal

        if(data.length === 0) {

          const query2 = `INSERT INTO users (username, password) VALUES ("${username}", "${hashedPassword}")`;
          pool.query(query2, async (erro,resul)=>{
            if(erro) throw erro;
            await res.json("User Created");
          });


        } else {

          res.json("username already exists");
        }







      })
    } catch (error) {
      console.log(error)
    }

  }
}

export default {
  register
}