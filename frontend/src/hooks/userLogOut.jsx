import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
function userLogOut() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const data = await res.json();
      const userData = localStorage.removeItem("chat-user");
      setAuthUser(userData);
      if (!data.success) {
        toast.error(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { loading, logout };
}

export default userLogOut;
