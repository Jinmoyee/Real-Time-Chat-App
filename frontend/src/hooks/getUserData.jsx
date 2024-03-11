import { useEffect, useState } from "react";
import { toast } from "sonner";

export const getUserData = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    try {
      const userData = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUserDetails(data);
        if (data.error) {
          throw new Error(data.error);
          setLoad(false);
        }
        setLoad(false);
      };
      userData();
    } catch (err) {
      toast.error(err.message);
      setLoad(false);
    }
  }, []);
  return { userDetails, load };
};
