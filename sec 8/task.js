var Name = document.getElementById("name");

var Age = document.getElementById("age");
var des = document.getElementById("description");
var err = document.getElementById("error");

var person = {
  firstName: "john",
  lastName: "Doe",
  age: 50,
  eyecolor: "blue",
  description: "welcome every body",
};

function add(name) {
  if (name == "ali") {
    Name.innerHTML = `${person.firstName} ${person.lastName}`;
    Age.innerHTML = person.age;
    des.innerHTML = person.description;
    console.log(Name + Age + des);
  } else {
    err.innerHTML = "error .....";
    console.log("error message");
  }
}
