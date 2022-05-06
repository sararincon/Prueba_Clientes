const Pool = require("pg").Pool;
const axios = require("axios");
const chalk = require("chalk");
const { v4: uuidv4 } = require("uuid");
const _ = require("lodash");

const pool = new Pool({
  user: "sararincon",
  host: "localhost",
  database: "apisara",
  password: "password",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(
      results.rows.map((user) => {
        return {
          id: user.id,
          name: user.name,
        };
      })
    );
  });
};

// const users = results.rows;
// console.log(users);

// response.status(200).send(users);
// });
// };

const createUser = async (req, response) => {
  const { data } = await axios.get("https://randomuser.me/api");
  const randomUser = data.results[0];
  const nombre = randomUser.name.first;
  const email = randomUser.email;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [nombre, email],
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

module.exports = {
  getUsers,
  createUser,
};
