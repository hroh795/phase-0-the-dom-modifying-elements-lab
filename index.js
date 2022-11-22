// Write your code here!
const element = document.getElementById("main");

element.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute('id','victory');

newHeader.textContent = "Ha Young is the champion";
