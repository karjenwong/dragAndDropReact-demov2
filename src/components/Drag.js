import React from "react";

function Drag(props) {
  function startDrag(ev) {
    ev.dataTransfer.setData("drag-item", props.dataItem);
  }
  const dragEnter = () => props.setTargetItem(props.dataItem);
  return (
    <div
      draggable
      onDragStart={startDrag}
      onDragEnter={dragEnter}
      className="card"
    >
      {props.children}
    </div>
  );
}

export default Drag;
