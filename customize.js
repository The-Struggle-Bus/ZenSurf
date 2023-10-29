// Initializes a global variable to store the currently dragged element.
var draggedElement = null;

// Function to allow a drop action on the container and highlight it.
function allowDrop(ev) {
  ev.preventDefault(); // Prevents the default behavior to make the drop action possible.
  ev.target.closest("#left, #right").classList.add("active-drag"); // Highlights the closest matching container (left or right) when hovering over it during a drag.
}

// Function to handle the start of a drag event.
function drag(ev) {
  draggedElement = ev.target; // Sets the element being dragged to the global variable.
  document
    .querySelectorAll("#left, #right")
    .forEach((el) => el.classList.add("active-drag")); // Highlights both containers to indicate that elements can be dropped there.
}

// Function to handle the drop event.
function drop(ev) {
  ev.preventDefault(); // Prevents the default drop behavior.

  // Removes the highlighting from both containers.
  document
    .querySelectorAll("#left, #right")
    .forEach((el) => el.classList.remove("active-drag"));

  // Gets the drop target element.
  var dropTarget = ev.target;
  // Finds the closest parent container (left or right) of the drop target.
  while (dropTarget && dropTarget.id !== "left" && dropTarget.id !== "right") {
    dropTarget = dropTarget.parentElement;
  }

  // Checks if the drop target is the left container and already has 3 images.
  if (
    dropTarget &&
    dropTarget.id === "left" &&
    dropTarget.getElementsByTagName("img").length >= 3
  ) {
    alert("A maximum of 3 features can set to the pop-up screen!");
    return; // Exits the function to prevent the drop.
  }

  // Appends the dragged element to the drop target container if both are valid.
  if (draggedElement && dropTarget) {
    dropTarget.appendChild(draggedElement);
    draggedElement = null; // Resets the global dragged element variable.
  }
}

//-----------------Save Button Logic -------------------------------------------

// ------------------------------DOMContent Loaded Logic ----------------------------------------------------------------
// Waits for the document to be fully loaded before attaching event listeners.
document.addEventListener("DOMContentLoaded", function () {
  // Fetches all the draggable images from the document.
  var draggableImages = document.querySelectorAll('img[draggable="true"]');
  // Attaches the dragstart event to all draggable images.
  draggableImages.forEach(function (img) {
    img.addEventListener("dragstart", drag);
  });

  // Fetches both containers (left and right).
  var containers = [
    document.getElementById("left"),
    document.getElementById("right"),
  ];

  // Attaches drop, dragover, and dragleave events to both containers.
  containers.forEach(function (container) {
    container.addEventListener("drop", drop); // Handles the drop event.
    container.addEventListener("dragover", allowDrop); // Allows the drop action and handles the visual indication.
    container.addEventListener("dragleave", function () {
      // Removes the highlighting from the container when the dragged item leaves its boundary.
      container.classList.remove("active-drag");
    });
  });
});
