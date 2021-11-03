// example docID = 2337

function getOtherDocument(docId) {
  console.log("running script");
  const targetDiv = document.getElementById("document-insert");

  fetch("https://region-uppsala.humany.net/metodbok-as/guides/" + docId, {
    method: "POST",
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}
