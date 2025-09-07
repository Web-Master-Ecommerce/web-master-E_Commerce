import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { supabase } from "../../../client";

export default function Login_User() {
  const { user, setUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    // تسجيل الخروج من Supabase
    await supabase.auth.signOut();
    setUser(null);
    setDropdownOpen(false);
  };

  if (user) {
    // بعد تسجيل الدخول: عرض اسم المستخدم فقط
    return (
      <div className="flex items-center gap-2 text-green-600 font-medium cursor-pointer ">
        <span>{user.username}</span>
        <button
          onClick={handleLogout}
          className="p-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  
  return (
    <div className="relative w-fit">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="cursor-pointer w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:scale-110"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="login-icon"
          className="w-full h-full filter hue-rotate-90"
        />
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded flex flex-col overflow-hidden transition-all duration-300 scale-95 origin-top-right z-50">
          <Link
            to="/login"
            className="px-4 py-2 hover:bg-green-100 cursor-pointer transition-colors"
            onClick={() => setDropdownOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 hover:bg-green-100 cursor-pointer transition-colors"
            onClick={() => setDropdownOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
