const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("../queries");
const axios = require("axios");
const _ = require("lodash");
const chalk = require("chalk");
const fs = require("fs");

// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import chalk from "chalk";
// import * as fs from "fs";
// import _ from "lodash";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
//Midleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/", async (req, res) => {
//   // const id = uuidv4().slice(0, 6);
//   const userData = await axios.get("https://randomuser.me/api");

//   _.forEach(userData.data.results, (user, index) => {
//     let nombre = `<ol>${index + 1}. Nombre: ${user.name.first} - Apellido: ${
//       user.name.last
//     }  </ol>`;
//     console.log(chalk.blue(nombre));
//     res.send();
//   });
// });

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// app.get("/random", async (req, res) => {
// const { data } = await axios.get("https://randomuser.me/api");
// // Paso 1
// const randomUser = data.results[0];
// // Paso 2
// const usuario = {
//   name: randomUser.name.first,
//   lastname: randomUser.name.last,
//   email: randomUser.email,
// };
// const data2 = JSON.parse(fs.readFileSync("usuario.json", "utf8"));
// // Paso 2
// const usuarios = data2.usuarios;
// // Paso 3
// usuarios.push(usuario);

// fs.writeFileSync("usuario.json", JSON.stringify(data2));

//   res.send("usuario almacenado");
// });

// app.get("/leer", async (req, res) => {
//   const usurio = fs.readFileSync(
//     "/Users/sararincon/Desktop/practicaPaquetes/usuario.json"
//   );
//   res.send(usurio);
// });

// Paso 3
// const { usuarios } = JSON.parse(fs.readFileSync("usuario.json", "utf8"));
// usuarios.push(usuario);
// Paso 4

app.get("/users", db.getUsers);

app.get("/random", db.createUser);

// app.get("/nuevoUsuario", (req, res) => {
//   // Paso 3
//   const { name, lastname, email, password } = req.query;
//   const usuario = {
//     name,
//     lastname,
//     email,
//     password,
//   };
//   // Paso 4
//   fs.writeFileSync("usuario.json", JSON.stringify(usuario));
//   res.send("Usuario almacenado con éxito");
// });
// // Paso 3

// app.get("/user", async (req, res) => {
//   const id = uuidv4().slice(0, 6);
// const { data } = await axios.get("https://randomuser.me/api");

//   const randomUser = data.results[0];

//   const usuario = {
//     id: id,
//     name: randomUser.name.first,
//     lastname: randomUser.name.last,
//     email: randomUser.email,
//   };

//   const data2 = JSON.parse(fs.readFileSync("Usuario.json", "utf8"));
//   // Paso 2
//   const usuarios = data2.usuarios;

//   usuarios.push(usuario);
//   fs.writeFileSync("usuario.json", JSON.stringify(usuarios));

//   res.send("Usuario almacenado con éxito");
// });

// // const usuario = {
// //   id: id,
// //   name: randomUser.name.first,
// // }a

// // const { usuarios } = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
// usuarios.push(usuario);

// const userJSON = JSON.parse(fs.readFileSync("userJSON.json", "utf8"));
// res.send(userJSON);

// _.forEach(userData.data.results, (user, index) => {
//   let nombre = `<ol>${index + 1}. Nombre: ${user.name.first} - Apellido: ${
//     user.name.last
//   } ID: ${id} </ol>`;
//   console.log(chalk.blue(nombre));

//   res.send(nombre);
// });

// res.json({
//   id: id,
//   name: userData.data.results[0].name.first,
//   lastName: userData.data.results[0].name.last,
//   email: userData.data.results[0].email,
//   phone: userData.data.results[0].phone,
// });

//   fs.writeFile("archivo.json", respuesta, (err, data) => {
//     if (err) {
//       console.log("El archivo no esta correcto");
//     } else {
//       console.log("El archivo se actulizo correctamente");
//     }
//   );
// });

//   res.send(userData.data.results);

// fs.writeFile("archivo.txt", nombre, (err, data) => {
//   if (err) {
//     console.log("El archivo no esta correcto");
//   } else {
//     console.log("El archivo se actulizo correctamente");
//   }
// });
