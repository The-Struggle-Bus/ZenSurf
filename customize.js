const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
let selected;

// Add dragstart event listeners to each list item
for (const list of lists) {
  list.setAttribute("draggable", true);

  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });
}

// Add dragover and drop event listeners for both containers
[leftBox, rightBox].forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();
    container.appendChild(selected);
    selected = null;
  });
});