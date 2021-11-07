import * as markup from "./testpage2.json";

const parser = new DOMParser();

const doc = parser.parseFromString(markup.Body, "text/html");

const table = doc.querySelector("table");

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

console.log(orangeContainer);

const targetDiv = document.getElementById("target-div");

targetDiv.innerHTML = `
  <div class="top-container">
    <div class="left-info-container">
      ${firstContainer.innerHTML}
    </div>
    <div class="right-info-container">
      <div>
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
