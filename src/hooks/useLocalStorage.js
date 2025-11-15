import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // Load from localStorage on first render
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("LocalStorage read error:", error);
      return initialValue;
    }
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LocalStorage write error:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
