var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// untuk cari banyaknya button pakai length

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
  });
}

// ATAU

document.querySelector("Button").addEventListener("click", handleClick);
// tanpa parenthesis di handleClick karena tidak boleh


function handleClick() {
  alert("I got clicked");
}



// Higher order function and passing functions as arguments
function add(num1, num2){
  return num1 + num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function calculator(num1, num2, operator){
  return operator(num1, num2);
}

// call the functions
calculator(3,4,multiply);
