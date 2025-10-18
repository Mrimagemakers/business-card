import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import CategoryPagesView from "./components/CategoryPagesView";
import ColoringCanvas from "./components/ColoringCanvas";
import GalleryPage from "./components/GalleryPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:categoryId" element={<CategoryPagesView />} />
          <Route path="/color/:pageId" element={<ColoringCanvas />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
