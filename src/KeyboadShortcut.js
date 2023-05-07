import { memo, useContext, useEffect } from "react";
import { ShortcutContext } from "./context/ShortcutContext";

export const KeyboardShortcut = memo(({ combo, callback, description }) => {
  const { activeShortcuts, listener, setActiveShortcuts } = useContext(
    ShortcutContext
  );

  useEffect(() => {
    if (!activeShortcuts[combo]) {
      listener.simple_combo(combo, callback);
      const sh = { ...activeShortcuts };
      sh[combo] = description;
      setActiveShortcuts(sh);
    }

    return () => {
      listener.unregister_combo();
    };
  }, [activeShortcuts]);

  return <div></div>;
});

export default KeyboardShortcut;
