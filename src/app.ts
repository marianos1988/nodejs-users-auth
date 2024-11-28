import express from "express";
// import { UserRepository } from "./repository";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

//Routes
import routerRegister from "./routers/routerRegister"
import routerLogin from "./routers/routerLogin";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev")); 


const PORT =  process.env.PORT || 3000;

app.get("/", (req, res)=>{
  
  res.send("Hola mundo");
});

app.use("/Login", routerLogin);

app.use("/Register", routerRegister)


 
app.post("/Logout", (req,res)=>{

});

app.get("/protectedgit", (req,res)=>{

});




app.listen(PORT, ()=>{
  console.log(`Server running from port ${PORT}`);
})