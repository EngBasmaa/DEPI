var first = document.querySelector("#getFirst");
var last = document.querySelector("#getLast");
var container = document.querySelector("#container");

var full_name = document.getElementById("fullName");

first.addEventListener("click", () => {
  let firstName = "";
  for (let i = 0; i <= full_name.value.length; i++) {
    if (full_name.value.charAt(i) === " ") {
      firstName = full_name.value.slice(0, i);
      break;
    }
  }
  container.innerHTML = firstName;
  console.log(firstName);
  alert(firstName);
});

last.addEventListener("click", () => {
  let lastName = "";
  for (let i = full_name.value.indexOf(" "); i < full_name.value.length; i++) {
    if (full_name.value.charAt(i) === " ") {
      lastName = full_name.value.slice(i + length - 1);
      break;
    }
  }
  container.innerHTML = lastName;
  console.log(lastName);
  alert(lastName);
});

//..................................................

// function getFirstName() {
//   let firstName = "";
//   const fullNameElement = document.getElementById("fullName");
//   for (let i = 0; i <= fullNameElement.value.length; i++) {
//     if (fullNameElement.value.charAt(i) === " ") {
//       firstName = fullNameElement.value.slice(0, i);
//       break;
//     }
//   }
//   document.querySelector("#container").innerHTML = firstName;
//   alert(firstName);
// }

// function getLastName() {
//   let lastName = "";
//   const fullNameElement = document.getElementById("fullName");
//   for (
//     let i = fullNameElement.value.indexOf(" ");
//     i < fullNameElement.value.length;
//     i++
//   ) {
//     if (fullNameElement.value.charAt(i) === " ") {
//       lastName = fullNameElement.value.slice(i + 1);
//       break;
//     }
//   }
//   document.querySelector("#container").innerHTML = lastName;
//   alert(lastName);
// }

// document.querySelector("#getFirst").addEventListener("click", getFirstName);
// document.querySelector("#getLast").addEventListener("click", getLastName);
