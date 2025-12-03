import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://192.168.50.49:3005/items";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((json) => {
        if (json.status === "ok") {
          setItems(Object.values(json.data));
        }
      });
  }, []);

  return (
    <div>
      <h2>Termék lista (GET)</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price} Ft{" "}
            <Link to={`/items/${item.id}`}>Részletek</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}