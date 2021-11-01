// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  tablinks[evt-1].className += ' active';
}
if(document.getElementsByClassName("tablinks").length > 0) {
    document.getElementsByClassName("tablinks")[0].className += ' active';
}
function showHide(div) {
  var content = document.getElementById(div);
  if(content != null) {
      if(content.style.display === "none") {
	      content.style.display = "block";
      }
      else if(content.style.display === "block") {
        content.style.display = "none";
      }
  }
}