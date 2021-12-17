const tableBody = document.querySelector('table#reviewContent > tbody');
const questionAnswerFrame = document.querySelector('div#questionAnswerFrame');
const td = document.createElement('td');
td.innerText = "hi";
td.style.verticalAlign = "top";
questionAnswerFrame.parentElement.parentElement.appendChild(td);