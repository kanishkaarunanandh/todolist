import React, { useState } from "react";
import cuteIcon from "./images/to-do-list.png";
import cuteIcon2 from "./images/list.png";

function Todo() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleDelete(removeId) {
    const tempArr = list.filter((item) => item.id !== removeId);
    setList(tempArr);
  }

  function handleChange(evt) {
    setNewItem(evt.target.value);
  }

  function addElement() {
    if (newItem.trim() !== "") {
      setList([...list, { id: list.length + 1, activity: newItem }]);
      setNewItem(""); // Clear the input field after adding an item
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>
            YET TO DO{" "}
            <img
              src={cuteIcon2}
              alt="Icon"
              style={{ width: "50px", height: "50px", marginLeft: "25px" }}
            />{" "}
          </h1>
        </div>
      </div>

      <div className="type">
        <div className="input">
          <img
            src={cuteIcon}
            alt="Icon"
            style={{ width: "50px", height: "50px", margin: "10px" }}
          />
          <input
            type="text"
            value={newItem}
            onChange={handleChange}
            placeholder="Add new item..."
          />
          <button className="add" onClick={addElement}>
            ADD
          </button>
        </div>
      </div>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {list.map((item) => (
            <li
              key={item.id}
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "15px",
              }}
            >
              {item.activity}{" "}
              <button onClick={() => handleDelete(item.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
