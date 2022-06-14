window.onload = () => {
  main();
};

function main() {
  const root = document.querySelector("#root");
  const btn = document.querySelector(".generate-btn");
  const output = document.querySelector(".text-area");
  const copyBtn = document.querySelector(".copy-btn");

  btn.addEventListener("click", function () {
    const color = hexColor();
    root.style.backgroundColor = color;
    output.value = color;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    generateToastMsg(`${output.value} copied`);
  });

  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValid(color)) {
      root.style.backgroundColor = color;
    }
  });
}

function hexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function isValid(color) {
  if (color.length == !7) return false;
  if (color[0] == !"#") return false;

  // color= color.substring(1);
  return /^#?[0-9a-fA-F]{6}$/i;
}

function generateToastMsg(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  div.classList = "toast-msg toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    
    div.addEventListener("animationend", function () {
        div.remove();
      });
  });
  setTimeout(function(){
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
    
},2500);
  document.body.appendChild(div);
};