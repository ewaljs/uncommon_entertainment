import React from "react";

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.length > 0 ? (
        items.map((item) => (
          <li key={item.id} className="item">
            {item.name}
          </li>
        ))
      ) : (
        <p>No items found. Please add an item.</p>
      )}
    </ul>
  );
}

export default ItemList;
