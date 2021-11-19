// example docID = 2337

function getOtherDocument(docId) {
  const body = fetch(
    "https://region-uppsala.humany.net/metodbok-as/guides/" + docId,
    {
      method: "GET",
      credentials: "same-origin",
    }
  )
    .then((res) => res.json())
    .then((json) => {
      return json.Body;
    });

  return body;
}

console.log("running script");
let targetDiv = document.getElementById("document-insert");

let insertId = targetDiv.getAttribute("data-insert-id");

getOtherDocument(insertId).then((insertBody) => {
  targetDiv.innerHTML = insertBody;
});

function testFunction() {
  console.log("kör testfunktionen");
}
