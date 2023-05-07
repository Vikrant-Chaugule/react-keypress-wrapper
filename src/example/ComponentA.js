import KeyboardShortcut from "../KeyboadShortcut";

const ComponentA = () => {
  return (
    <div
      id="comp-a-container"
      style={{ border: "1px solid grey", width: 200, height: 200 }}
    >
      <KeyboardShortcut
        combo="esc"
        description="Component A: esc"
        callback={() => {
          const element = document.getElementById("comp-a-container");
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          element.style.backgroundColor = `#${randomColor}`;
        }}
      />

      <div>
        <h2>Component A</h2>
        <p>Press esc</p>
      </div>
    </div>
  );
};

export default ComponentA;
