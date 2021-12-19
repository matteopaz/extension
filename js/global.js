document.querySelector('.logo').src = chrome.runtime.getURL('./img/math-academy-icon-reversed.png');
document.querySelector('.logo').style.maxHeight = "35px";

document.querySelector('link[rel="shortcut icon"]').href = chrome.runtime.getURL('./img/favicon.png');
