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
  const targetDiv = document.getElementById("insert-content");

  if (!targetDiv) {
    console.log("no insert div found");
    return;
  }
  const insertId = targetDiv.getAttribute("data-insert-id");
  if (!insertId) {
    console.log("no insert div found");
    return;
  }
  console.log("inserting document");

  fetchDocument(insertId).then((insertBody) => {
    targetDiv.innerHTML = insertBody;
  });
}

function insertDocumentById(docId) {
  const targetDiv = document.getElementById("insert-content");

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

function setContentId(id) {
  const targetDiv = document.getElementById("insert-content");
  if (targetDiv) {
    if (targetDiv.getAttribute("data-insert-id")) {
      console.log("Insert id is already set");
      return;
    }
    targetDiv.setAttribute("data-insert-id", id);
    console.log("New insert id:", targetDiv.getAttribute("data-insert-id"));
  } else {
    console.log("No target div found");
  }
}
