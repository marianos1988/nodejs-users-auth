import express from "express";
// import { UserRepository } from "./repository";
// import { PORT } from "./config ";
import pool from "./bdConfig";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routerRegister from "./routers/routerRegister"

const app = express();
app.use(express.json());

const PORT =  process.env.PORT || 3000;

app.get("/", (req, res)=>{
  
  res.send("Hola mundo");
});

app.post("/Login", (req,res)=>{

});

app.post("/Register", async (req,res)=>{
  const data = await req.body;
  const {username, password} = data;

  try {

    // const id = UserRepository.create({username, password});
    // res.json(id);

  } catch (error) {
    //Normalmente no es normal mandar directo el error del repositorio
    res.status(400).send(error)
  }



});
 
app.post("/Logout", (req,res)=>{

});

app.get("/protectedgit", (req,res)=>{

});




app.listen(PORT, ()=>{
  console.log(`Server running from port ${PORT}`);
})