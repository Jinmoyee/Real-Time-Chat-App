import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
function userSignup() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullName,
    userName,
    email,
    gender,
    password,
    conformPassword,
  }) => {
    const success = userSignupError({
      fullName,
      userName,
      email,
      gender,
      password,
      conformPassword,
    });
    if (!success) return;

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          email,
          gender,
          password,
          conformPassword,
        }),
      });
      const data = await res.json();
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      if (!data.success) {
        toast.error(data.message);
        setLoading(false);
        return;
      }
      if (data.error) {
        throw new Error(data.error);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { loading, signup };
}

export default userSignup;

const userSignupError = ({
  fullName,
  userName,
  email,
  gender,
  password,
  conformPassword,
}) => {
  if (
    !fullName ||
    !userName ||
    !email ||
    !gender ||
    !password ||
    !conformPassword
  ) {
    toast.error("Please fill all the required fields");
    return false;
  }
  if (fullName.length < 8) {
    toast.error("Full name must be at least 8 characters");
    return false;
  }
  if (userName.length < 2) {
    toast.error("User name must be at least 2 character");
    return false;
  }
  if (gender == "") {
    toast.error("Please select a gender");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return false;
  }
  if (password != conformPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  return true;
};
