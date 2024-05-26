function addNumers(x, y) {
  console.log(x + y);
}

addNumers(100, 200);

function addMoreNumbers(...num) {
  console.log(num);
}
addNumers(addMoreNumbers());

addMoreNumbers(100, 200, 300);
