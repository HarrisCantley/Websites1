let SayHello = document.getElementById("button");

SayHello.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "Hello!";
}
