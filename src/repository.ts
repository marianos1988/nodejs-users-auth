// // simula ser una base de datos dentro de nuestro disco

// import DBLocal from "db-local";
// import crypto from "crypto";

// const { Schema } = new DBLocal({ path: "./db" })

// const User = Schema("User", {
//   _id: { type: String, required: true },
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// })

// export class UserRepository {
//   static create ({ username, password }:any) {

//     // Validaciones del username
//     if(typeof username !== "string") throw new Error("username must be a string");
//     else if(username.length < 3) throw new Error("username must be at least 3 characters long");

//     else if(typeof password !== "string") throw new Error("username must be a string");
//     else if(password.length < 6) throw new Error("password must be at least 6 characters long");

//     //Asegurar que username que no existe
//     const user = User.findOne({ username })
//     if(user) throw new Error("username already exists");

//     // genera un id Random
//     const id = crypto.randomUUID();

//     User.create({
//       _id: id,
//       username: username,
//       password: password
//     }).save(); //Crea el usuario y luego lo guarda 
//   }
//   // static login ({ username, password }) {}
// }
