// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import Blog from "./pages/Blog/Blog";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
