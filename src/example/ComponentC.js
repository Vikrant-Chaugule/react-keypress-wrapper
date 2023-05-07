import KeyboardShortcut from "../KeyboadShortcut";

const ComponentC = () => {
  return (
    <div
      id="comp-c-container"
      style={{ border: "1px solid grey", width: 200, height: 200 }}
    >
      <KeyboardShortcut
        combo="ctrl s"
        description="Component C: ctr s"
        callback={() => {
          const element = document.getElementById("comp-c-container");
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          element.style.backgroundColor = `#${randomColor}`;
        }}
      />

      <div>
        <h2>Component C</h2>
        <p>Press ctrl s</p>
      </div>
    </div>
  );
};

export default ComponentC;
