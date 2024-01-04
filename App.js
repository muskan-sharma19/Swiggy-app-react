{/* <div id="parent">
  <div id="child">
    <h1> Hii I am H1</h1>
  </div>
</div>; */}

const nestedprops = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hii I am H1")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello world in react app"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
