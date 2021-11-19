//@ts-check
// example docID = 2337

function fetchDocument(docId) {
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

function insertDocument() {
  console.log("running script");
  const targetDiv = document.getElementById("document-insert");

  const insertId = targetDiv.getAttribute("data-insert-id");

  fetchDocument(insertId).then((insertBody) => {
    targetDiv.innerHTML = insertBody;
  });
}

insertDocument();

function testFunction() {
  console.log("kör testfunktionen");
}
