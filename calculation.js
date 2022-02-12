function deleteME() {
  document.getElementById("myresult").value = "";
}

function calculation(newValue) {
  document.getElementById("myresult").value += newValue;
  // console.log(newValue)
}

function answer() {
  let a = document.getElementById("myresult").value;
  let b = eval(a);
  document.getElementById("myresult").value = b;
}
