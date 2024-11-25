import express from "express";
// import { PORT } from "./config ";

const app = express();

const PORT =  process.env.PORT || 3000;

app.get("/", (req, res)=>{
  
  res.send("Hola mundo");
});

app.post("/Login", (req,res)=>{

});

app.post("/Register", (req,res)=>{

});

app.post("/Logout", (req,res)=>{

});

app.get("/protectedgit", (req,res)=>{

});




app.listen(PORT, ()=>{
  console.log(`Server running from port ${PORT}`);
})