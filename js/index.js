const body = document.body;

const footer = document.createElement('footer');

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = "Victor Salazar " + thisYear;

footer.appendChild(copyright);


