import "./styles.css";
import { Example } from "./example/Example";
import { ShortcutContextProvider } from "./context/ShortcutContext";

export default function App() {
  return (
    <div className="App">
      <ShortcutContextProvider>
        <Example />
      </ShortcutContextProvider>
    </div>
  );
}
