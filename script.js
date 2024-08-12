// This function clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function displays values
function display(value) {
  document.getElementById("result").value += value;
}

// This function  returns the result
function calculate() {
  try {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}
