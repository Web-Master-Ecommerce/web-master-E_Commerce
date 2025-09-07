import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "../client";

interface AuthContextType {
  user: { email: string; username?: string } | null;
  setUser: (user: { email: string; username?: string } | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string; username?: string } | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      // من المستخدم الحالي  Supabase
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        // git username من جدول profiles
        const { data: profileData } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", session.user.id)
          .single();

        setUser({ email: session.user.email || "", username: profileData?.username || "" });
      }
    };

    loadUser();

    // مراقبة تغييرات تسجيل الدخول والخروج
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        supabase
          .from("profiles")
          .select("username")
          .eq("id", session.user.id)
          .single()
          .then(({ data: profileData }) => {
            setUser({ email: session.user.email || "", username: profileData?.username || "" });
          });
      } else {
        setUser(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
