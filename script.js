let para = document.querySelector("#para");
let inputbtn = document.querySelector("#btn");
let inputfield = document.querySelector("#text");

let randomNum = Math.floor(Math.random() * 100);
inputbtn.addEventListener("click", () => {
  let getinput = inputfield.value;
  if (isNaN(getinput)) {
    alert("Error! Please Enter a Valid Number.");
  }
  if (randomNum == getinput) {
    para.innerHTML = `Congratulations! You Guess Correct And Your answer is ${getinput}`;
  } else if (getinput < randomNum) {
    para.innerHTML = `Your guess is low!`;
  } else if (getinput > randomNum) {
    para.innerHTML = `Your Guess is High!`;
  }
  inputfield.value = "";
});
