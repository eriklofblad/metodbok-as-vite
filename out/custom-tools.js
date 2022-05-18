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
  const targetDiv = document.getElementById("document-insert");

  if (!targetDiv) {
    console.log("no insert div found");
    return;
  }
  const insertId = targetDiv.getAttribute("data-insert-id");
  if (!insertId) {
    console.log("no insert div found");
    return;
  }
  console.log("running script");

  fetchDocument(insertId).then((insertBody) => {
    targetDiv.innerHTML = insertBody;
  });
}

function insertDocumentById(docId) {
  const targetDiv = document.getElementById("document-insert");

  if (!targetDiv) {
    console.log("no insert div found");
    return;
  }
  console.log("running script");

  fetchDocument(docId).then((insertBody) => {
    targetDiv.innerHTML = insertBody;
  });
}
function insertCompareDocument(docId) {
  const targetDiv = document.getElementById("compare-container");

  if (!targetDiv) {
    console.log("no insert div found");
    return;
  }
  console.log("running script");

  fetchDocument(docId).then((insertBody) => {
    targetDiv.innerHTML = insertBody;
  });
}

// insertDocument();

function testFunction() {
  console.log("kör testfunktionen");
}
