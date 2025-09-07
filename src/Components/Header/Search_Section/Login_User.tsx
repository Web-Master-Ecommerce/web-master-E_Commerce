import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { supabase } from "../../../client";

export default function Login_User() {
  const { user, setUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setDropdownOpen(false);
  };

  if (user) {
    // بعد تسجيل الدخول: اسم اليوزر dropdown
    return (
      <div className="relative w-fit">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
         className="cursor-pointer flex items-center gap-2 text-green-600 font-semibold 
               bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg 
               hover:bg-green-50 transition-all duration-200"
        >
          {user.username}
           <svg
      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
        </div>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-50  bg-white shadow-lg rounded flex flex-col overflow-hidden z-50 cursor-pointer">
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-left hover:bg-green-100 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-fit">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="cursor-pointer w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:scale-110 mr-5"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="login-icon"
          className="w-full h-full filter hue-rotate-90"
        />
      </div>

      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded flex flex-col overflow-hidden transition-all duration-300 scale-95 origin-top-right z-50">
          <a href="/login" className="px-4 py-2 hover:bg-green-100 cursor-pointer">Login</a>
          <a href="/register" className="px-4 py-2 hover:bg-green-100 cursor-pointer">Register</a>
        </div>
      )}
    </div>
  );
}
