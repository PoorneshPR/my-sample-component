import React from "react";
import { FaTrash } from "react-icons/fa";

const ItemsList = ({ itemsproperties,handleCheck,handleDelete  }) => {

    
  return (
    <ul>
      {itemsproperties.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            style={item.checked ? { textDecoration:  "line-through" } : null}
          >
            {item.item}
          </label>
          <FaTrash
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ItemsList;
