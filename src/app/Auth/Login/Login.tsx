// src/app/Auth/Login/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../client";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else if (data.user) {
        const { data: profileData } = await supabase.from("profiles").select("username").eq("id", data.user.id).single();
        setUser({ email: data.user.email || "", username: profileData?.username || "" });
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
      <form onSubmit={handleLogin} className="flex flex-col w-full space-y-4">
        <h2 className="text-2xl mb-4 font-semibold flex justify-center">Login</h2>
        {message && <div className={`p-2 rounded text-center ${message.includes("success") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>{message}</div>}
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="p-2 border rounded-md outline-none focus:border-[#35AFA0]" placeholder="Enter email"/>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="p-2 border rounded-md outline-none focus:border-[#35AFA0]" placeholder="Enter password"/>
        <button type="submit" disabled={loading} className="bg-[#35AFA0] text-white p-2 rounded-md hover:bg-[#2c8c83]">{loading ? "Logging in..." : "Log In"}</button>
      </form>
    </div>
  );
}
