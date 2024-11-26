import pool from "../bdConfig"

const register = async (req: any,res: any) => {

  const data = await req.body;
  const {username, password} = data;
  console.log("asd");
  // Validaciones del username
  if(typeof username !== "string") throw new Error("username must be a string");
  else if(username.length < 3) throw new Error("username must be at least 3 characters long");
  
  // Validaciones del password
  else if(typeof password !== "string") throw new Error("username must be a string");
  else if(password.length < 6) throw new Error("password must be at least 6 characters long");

  // else {
  //   //Asegurar que username que no existe
  //   const query = `SELECT * FROM users WHERE username = "${username}"`;
  //   pool.query(query, async (err,resu)=>{

  //     if(err) throw err;

  //     const repeatUser = await resu;

  //     if(repeatUser) throw new Error("username already exists");
  //     else {

  //     }

  //   })
  // }

      // const user = User.findOne({ username })
      // if(user) throw new Error("username already exists");



  // try {

  //   // const id = UserRepository.create({username, password});
  //   // res.json(id);

  // } catch (error) {
  //   //Normalmente no es normal mandar directo el error del repositorio
  //   res.status(400).send(error)
  // }

  res.send("jojo")
}


export default {
  register
}