import { useContext } from "react";
import { ShortcutContext } from "../context/ShortcutContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const Example = () => {
  const { activeShortcuts } = useContext(ShortcutContext);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ActiveShortcuts list={activeShortcuts} />
    </div>
  );
};

const ActiveShortcuts = ({ list = [] }) => {
  return (
    <div>
      {Object.entries(list).map((entry) => (
        <div key={`${entry[0]}${entry[1]}`}>
          <h3>{entry[0]}</h3>
          <p>{entry[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Example;
