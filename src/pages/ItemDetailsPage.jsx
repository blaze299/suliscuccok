import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API = "http://192.168.50.49:3005/items";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((r) => r.json())
      .then((json) => setItem(json));
  }, [id]);

  if (!item) return <div>Betöltés...</div>;

  return (
    <div>
      <h2>Termék részletek (GET-id)</h2>
      <p>ID: {item.id}</p>
      <p>Név: {item.name}</p>
      <p>Ár: {item.price} Ft</p>
      
      <Link to="/">← Vissza a listához</Link>
    </div>
  );
}
