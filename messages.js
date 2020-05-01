var messages;
var textbox;
var button;

window.onload=function(){
  messages = document.getElementById("messages");
  textbox = document.getElementById("inputbox");
  button = document.getElementById("button");

  button.addEventListener("click", function(){
    var mes = document.createElement("li");
    mes.innerHTML = textbox.value;
    messages.appendChild(mes);
  });
}
