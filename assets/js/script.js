
var names = document.getElementById('name');
var pw = document.getElementById('pw');
var check=document.getElementById('Check')=false;


function store() {
    localStorage.setItem('name', names.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('check',check.value);
}


function check() {

    
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var storedCheck= localStorage.getItem('check');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var UserCheck= localStorage.getItem('check');

    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert("Error");
    }else {
        
        alert('success')
        
    }
}



// const myObject = {
//     username : "elgun",
//     password : "qoca",
//     isLogin : false
//   }
  
  
  window.localStorage.setItem("myobject", JSON.stringify(myObject));
  //let newobject = window.localStorage.getItem("myObject");
