import KeyboardShortcut from "../KeyboadShortcut";

const ComponentB = () => {
  return (
    <div
      id="comp-b-container"
      style={{ border: "1px solid grey", width: 200, height: 200 }}
    >
      <KeyboardShortcut
        combo="ctrl d"
        description="Component B: ctrl d"
        callback={() => {
          const element = document.getElementById("comp-b-container");
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          element.style.backgroundColor = `#${randomColor}`;
        }}
      />

      <div>
        <h2>Component B</h2>
        <p>Press ctrl d</p>
      </div>
    </div>
  );
};

export default ComponentB;
