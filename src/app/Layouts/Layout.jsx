// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "@/Components/Header/Header_Container";
import Footer from "@/Components/Footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
