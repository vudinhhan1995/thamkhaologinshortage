var click = document.getElementById("submit");
click.addEventListener("click", addData);

var arr = new Array();

function addData() {
  getData();

  arr.push({
    Name: document.getElementById("name").value,
    Surname: document.getElementById("surname").value,
    Class: document.getElementById("class").value,
  });

  localStorage.setItem("localData", JSON.stringify(arr));
}

function getData() {
  var str = localStorage.getItem("localData");
  if (str != null) {
    arr = JSON.parse(str);
  }
}
