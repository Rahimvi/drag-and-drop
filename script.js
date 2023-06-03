document.getElementById("btn").addEventListener("click", function () {
  let box = document.createElement("div");
  box.classList.add("box");

  document.getElementById("boxContainer").appendChild(box);
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
