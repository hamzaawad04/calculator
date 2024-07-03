let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText); //'eval' evaluates or executes an argument as if it were Javascript; not used due to security risk as it can run malicious code injected into your program
          break;
        } catch {
          display.innerText = "Error";
          break;
        } //try and catch come in pairs; try executes a statement to check for errors; catch executes another statement if an error is found in the try block
      default:
        display.innerText += e.target.innerText;
    }
  });
});
