import React, { useEffect, useState } from "react";
import axiosInstance from "./api/axiosInstance";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axiosInstance.get("/items");
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items. Please try again later.");
    }
  };

  const addItem = async (name) => {
    try {
      const response = await axiosInstance.post("/items", { name });
      setItems((prevItems) => [...prevItems, response.data]);
      setError(null);
    } catch (err) {
      setError("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="app">
      <h1>Item List</h1>
      {error && <p className="error">{error}</p>}
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
