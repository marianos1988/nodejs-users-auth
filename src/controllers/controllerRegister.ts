import pool from "../bdConfig"

const register = async (req: any,res: any) => {

      const data = await req.body;
      const {username, password} = data;

      // Validaciones del username
      if(typeof username !== "string") throw new Error("username must be a string");
      else if(username.length < 3) throw new Error("username must be at least 3 characters long");
        // Validaciones del password
      else if(typeof password !== "string") throw new Error("username must be a string");
      else if(password.length < 6) throw new Error("password must be at least 6 characters long");
  
      //Asegurar que username que no existe
      const user = User.findOne({ username })
      if(user) throw new Error("username already exists");



  try {

    // const id = UserRepository.create({username, password});
    // res.json(id);

  } catch (error) {
    //Normalmente no es normal mandar directo el error del repositorio
    res.status(400).send(error)
  }
}


export default {
  register
}