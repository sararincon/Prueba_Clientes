function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("users");
const url = "http://localhost:4000/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let users = data.results;
    console.log(users);
    return users.map(function (author) {
      let li = createNode("li");

      let span = createNode("span");

      span.innerHTML = ` - ${author.name.first} -  ${author.name.last}`;

      //     results.rows,
      //     (user) =>
      //       `<ol>${user.id}. Nombre: ${user.name} - Apellido: ${user.lastname} - UUID: ${user.uuid}- Fecha: ${user.fecha}</ol>`
      //   ).join("")
      // );

      append(li, span);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
