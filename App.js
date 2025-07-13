const parent = React.createElement("div", { id: "parent-div" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1-inside-child" }, "Inside child"),
    React.createElement("h2", { id: "heading2" }, "H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1-inside-child" }, "Inside child"),
    React.createElement("h2", { id: "heading2" }, "H2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Here is the root:", root);

root.render(parent);
