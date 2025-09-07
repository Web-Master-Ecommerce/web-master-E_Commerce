import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../client";
import { useAuth } from "../../../context/AuthContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ تسجيل المستخدم في Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (data.user) {
        //  تخزين username في جدول profiles
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([{ id: data.user.id, username }]); // array مهم

        if (profileError) {
          setMessage("Account created, but failed to save username.");
          console.error(profileError);
          setUser({ email: data.user.email || "", username: "" });
        } else {
          setUser({ email: data.user.email || "", username }); // عرض الاسم في الهيدر
          setMessage("Account created successfully!");
        }

        // Empty Inputs
        setUsername("");
        setEmail("");
        setPassword("");

        //  Home page redirect
        navigate("/");
      }
    } catch (err) {
      setMessage("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg mb-12">
      <form
        onSubmit={handleRegister}
        className="flex flex-col w-full max-w-md p-8 space-y-4"
      >
        <h2 className="text-2xl mb-4 font-semibold flex justify-center">Sign Up</h2>

        {message && (
          <div
            className={`p-2 rounded text-center ${
              message.includes("success") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <label htmlFor="username" className="mb-1">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="p-2 border border-gray-300 rounded-md focus:border-[#35AFA0] outline-none"
          required
        />

        <label htmlFor="email" className="mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded-md focus:border-[#35AFA0] outline-none"
          required
        />

        <label htmlFor="password" className="mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="p-2 border border-gray-300 rounded-md focus:border-[#35AFA0] outline-none"
          required
        />

        <button
          type="submit"
          className="text-white bg-[#35AFA0] hover:bg-[#2c8c83] p-2 rounded-md disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
