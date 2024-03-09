import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
function userLogIn() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const login = async ({ userName, email, password }) => {
    const success = userLogInError({
      userName,
      email,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
}

export default userLogIn;

const userLogInError = ({ userName, email, password }) => {
  if (!userName || !email || !password) {
    toast.error("Please fill all the required fields");
    return false;
  }
  if (userName.length < 2) {
    toast.error("User name must be at least 2 character");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return false;
  }
  return true;
};
