//@ts-check

// import * as markup from "./testpage2.json";

// const parser = new DOMParser();

// const doc = parser.parseFromString(markup.Body, "text/html");

// const table = doc.querySelector("table");

const table = document.querySelector("table");

const firstContainer = table.querySelector(
  'td[style*="background-color: rgb(238, 238, 238);"]'
);

const yellowContainer = table.querySelector(
  'td[style*="background-color: rgb(255, 255, 204);"]'
);
const pinkContainer = table.querySelector(
  'td[style*="background-color: rgb(255, 204, 255);"]'
);
const orangeContainer = table.querySelector(
  'td[style*="background-color: rgb(255, 153, 102);"]'
);

const topRightContainer = table.querySelector("table");

// console.log(orangeContainer);

// const targetDiv = document.getElementById("target-div");
const targetDiv = document.createElement("div");

targetDiv.innerHTML = `
<link href="https://eriklofblad.github.io/metodbok-as-vite/out/custom.css" rel="stylesheet" wfd-invisible="true" />

  <div class="top-container">
    <div class="left-info-container">
      ${firstContainer.innerHTML}
    </div>
    <div class="right-info-container-new">
      <div class="right-top-container">
        <table>
        ${topRightContainer ? topRightContainer.innerHTML : ""}
        </table>
      </div>
      <div class="yellow-container">
       ${yellowContainer ? yellowContainer.innerHTML : ""}
      </div>
      <div class="pink-container">
       ${pinkContainer ? pinkContainer.innerHTML : ""}
      </div>
      <div class="orange-container">
       ${orangeContainer ? orangeContainer.innerHTML : ""}
      </div>
    </div>
  </div
`;

table.parentNode.replaceChild(targetDiv, table);

const innerTableRows = document.querySelectorAll(
  ".right-info-container-new tr"
);

/** @type Node[] */
const pRows = [];

innerTableRows.forEach((row) => {
  const pRow = document.createElement("p");
  row.childNodes.forEach((td) => {
    pRow.innerHTML += td.innerHTML;
  });
  pRows.push(pRow);
});

document.querySelector(".right-top-container").replaceChildren(...pRows);
