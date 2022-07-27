const buton = document.querySelector("button");
var taskData = [];
var i = null;

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
 event.preventDefault();
  if (taskData.length > 0) {
    var name = document.getElementById("name").value;
    var data = document.getElementById("data").value;
    var date = document.getElementById("date").value;
    const obj = { name: name, data: data, date: date };
    var stored = JSON.parse(localStorage.getItem("task"));
    stored.push(obj);
  }

  var name = document.getElementById("name").value;
  var data = document.getElementById("data").value;
  var date = document.getElementById("date").value;
  const obj = { name: name, data: data, date: date };
  taskData.push(obj);

  localStorage.setItem("task", JSON.stringify(taskData));

  if (i == null) {
    i = 0;
  }

  //   for (i = i; i < taskData.length; ++i) {
  //     var rowCount = table.rows.length;
  //     var row = table.insertRow(rowCount);
  //     row.insertCell(0).innerHTML = i + 1;
  //     row.insertCell(1).innerHTML = taskData[i].name;
  //     row.insertCell(2).innerHTML = taskData[i].data;
  //     row.insertCell(3).innerHTML = taskData[i].date;
  //     i = i;
  //   }
});
const users = JSON.parse(localStorage.getItem("task"));
// JSON.parse(localStorage.getItem("task")).foreach(e => {
//     console.log(e.name);
// })
let tbody = document.querySelector("tbody");

users.forEach((user) => {
  console.log(user.name);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  tbody.innerHTML += `
    <tr>
    <th>${i +=1}</th>
    <th>${user.name}</th>
    <th>${user.data}</th>
    <th>${user.date}</th>
    </tr>
  `;
  //   tbody.appendChild(tr).innerHTML = i + 1;
  //   tbody.appendChild(tr).innerHTML = user.name;
  //   tbody.appendChild(tr).innerHTML = user.data;
  //   tbody.appendChild(tr).innerHTML = user.date;
  //   i = i;
});

// console.log(JSON.parse(localStorage.getItem("task")));
