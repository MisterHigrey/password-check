import { useState, useEffect } from "react";

const usePasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("none");

  useEffect(() => {
    if (password.length === 0) {
      setStrength("none");
    } else if (password.length < 8) {
      setStrength("weak");
    } else if (
      /\d/.test(password) &&
      /[a-zA-Z]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      setStrength("strong");
    } else {
      setStrength("medium");
    }
  }, [password]);

  return { password, setPassword, strength };
};

export default usePasswordStrength;
