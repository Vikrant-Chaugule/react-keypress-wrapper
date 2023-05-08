import React, { createContext, useEffect, useState } from "react";
import keypress from "keypress.js";

export const ShortcutContext = createContext({});

export const ShortcutContextProvider = ({ children }) => {
  const [activeShortcuts, setActiveShortcuts] = useState([]);
  const [listener] = useState(new keypress.Listener());

  useEffect(() => {
    return () => {
      listener.destroy();
    };
  }, []);

  return (
    <ShortcutContext.Provider
      value={{ activeShortcuts, setActiveShortcuts, listener }}
    >
      {children}
    </ShortcutContext.Provider>
  );
};
