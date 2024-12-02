import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Routes
import routerRegister from "./routers/routerRegister"
import routerLogin from "./routers/routerLogin";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.set("view engine", "ejs") // SEtear plantillas que se van a usar EJS
app.set('views', path.join(__dirname, 'views')) // DEfinir la ruta de las plantillas ejs
app.use(cookieParser()); //SEa ctiva el uso de las cookies



const PORT =  process.env.PORT || 3000;

app.get("/", (req, res)=>{
  
  res.render("example",{username: "Mariano"}); // el nombre name va a la variable de la plantilla name
});

app.get("/ejs",(req,res)=>{
  res.render("index")
})

app.use("/Login", routerLogin);

app.use("/Register", routerRegister)


 
app.post("/Logout", (req,res)=>{

});

app.get("/protectedgit", (req,res)=>{

});




app.listen(PORT, ()=>{
  console.log(`Server running from port ${PORT}`);
})