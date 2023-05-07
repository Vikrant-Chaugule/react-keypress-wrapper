import { createContext, useEffect, useState } from "react";
import Listener from "keypress.js";

export const ShortcutContext = createContext({});

export const ShortcutContextProvider = ({ children }) => {
  const [activeShortcuts, setActiveShortcuts] = useState([]);
  const [listener] = useState(new Listener.keypress.Listener());

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

export default ShortcutContextProvider;
