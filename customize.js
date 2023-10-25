var draggedElement = null;

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        draggedElement = ev.target;
      }

      function drop(ev) {
        ev.preventDefault();
        if (draggedElement) {
          ev.target.appendChild(draggedElement);
          draggedElement = null;
        }
      }