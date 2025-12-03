import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}