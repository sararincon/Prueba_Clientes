const Pool = require("pg").Pool;
const axios = require("axios");
const chalk = require("chalk");
const { v4: uuidv4 } = require("uuid");
const _ = require("lodash");
const res = require("express/lib/response");

const pool = new Pool({
  user: "sararincon",
  host: "localhost",
  database: "apisara",
  password: "password",
  port: 5432,
});

// const users = results.rows;
// console.log(users);

// response.status(200).send(users);
// });
// };

const createUser = async (req, response) => {
  let id1 = uuidv4().slice(0, 6);
  const { data } = await axios.get("https://randomuser.me/api");
  const randomUser = data.results[0];
  const nombre = randomUser.name.first;
  const apellido = randomUser.name.last;

  pool.query(
    "INSERT INTO users (name, lastname, uuid, fecha) VALUES ($1, $2, $3, $4)",
    [nombre, apellido, id1, new Date()],
    (error, results) => {
      if (error) {
        throw error;
      }
      // _.forEach(randomUser,  (user, index) => {
      //   let nombre = `<ol>${index + 1}. Nombre: ${
      //     user.name.first
      //   } - Apellido: ${user.name.last} </ol>`;
      response.status(201).send(`Usuario ${nombre} creado `);
    }
  );
};
//   );
// };

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }

    response.send(results.rows);
    //   _.map(
    //     results.rows,
    //     (user) =>
    //       `<ol>${user.id}. Nombre: ${user.name} - Apellido: ${user.lastname} - UUID: ${user.uuid}- Fecha: ${user.fecha}</ol>`
    //   ).join("")
    // );
  });

  //   let nombre = `<ol>${index + 1}. Nombre: ${
  //     user.name.first
  //   } - Apellido: ${user.name.last} </ol>`;
  // randomUser,
  //   (user, index) => {
  //     let nombre = `<ol>${index + 1}. Nombre: ${
  //       user.name.first
  //     } - Apellido: ${user.name.last} </ol>`;
  //     response.status(200).send(nombre);
};

module.exports = {
  getUsers,
  createUser,
};
