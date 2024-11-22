import express from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res)=>{
  
  console.log("Hola mundo")
});



app.listen(PORT, ()=>{
  console.log(`Server running from port ${PORT}`);
})