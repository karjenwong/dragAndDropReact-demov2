import React, { useState } from "react";
import Drag from "./components/Drag";
import DropTarget from "./components/DropTarget";
import './App.css'
function App() {
  const [data, setData] = useState([
    "https://i.pinimg.com/280x280_RS/e8/c6/39/e8c639017c2e8681491579fc5b4d4c6a.jpg",
    "https://i.pinimg.com/600x315/1a/c7/87/1ac78791c505507f05a6223ce92ab0eb.jpg",
    "https://i.pinimg.com/474x/e2/7f/ef/e27fef196c33cdf300f3ea5da7143a47.jpg",
    "https://rkuykendall.github.io/wheretostartreading/spider-man/thumb-asmv3.jpg",
    "https://i.pinimg.com/474x/5f/34/51/5f3451e3c672f94df16451863dc68bdf.jpg",
    "https://i.pinimg.com/originals/fb/f3/4d/fbf34d70f46b181efaf560f8324aadf5.png",
  ]);
  const [targetItem, setTargetItem] = useState("");
  const itemDropped = (droppedItem) => {
    let [a, b] = [data.indexOf(droppedItem), data.indexOf(targetItem)];
    data[a] = targetItem;
    data[b] = droppedItem;
    setData([...data]);
  };
  return (
    <div className="app">
      <h2>Comic Book Gallery</h2>
      <p>Drag and reorder the pictures!</p>
        <DropTarget itemDropped={itemDropped}>
          {data.map((x, i) => (
            <Drag dataItem={x} setTargetItem={setTargetItem}>
              <img src={x} alt="comic character" />
            </Drag>
          ))}
        </DropTarget>
    </div>
  );
}

export default App;
