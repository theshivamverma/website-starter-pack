let root;

import App from "./App"

function init(){
    root = document.querySelector("#root")
    root.innerHTML = `
        <h1>This is a vanillaJS website starter pack</h1>
        ${App({ name: "User" })}
    `
}

init()