import React from "react";

function DropTarget(props) {
  function dragOver(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    const droppedItem = ev.dataTransfer.getData("drag-item");
    if (droppedItem) {
      props.itemDropped(droppedItem)
    }
  }

  return (
    <div onDragOver={dragOver} onDrop={drop} className="board">
     {props.children}
    </div>
  );
}

export default DropTarget;
