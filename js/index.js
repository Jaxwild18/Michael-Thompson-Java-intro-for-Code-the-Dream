const body = document.querySelector("body");
const newFooter = document.createElement("footer");
body.appendChild(newFooter);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© ${thisYear} Michael Thompson`;
footer.appendChild(copyright);
