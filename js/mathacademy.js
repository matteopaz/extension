document.querySelector('.logo').src = chrome.runtime.getURL('./img/math-academy-icon-reversed.png');
document.querySelector('.logo').style.maxHeight = "35px";

document.querySelector('link[rel="shortcut icon"]').href = chrome.runtime.getURL('./img/favicon.png');
document.querySelector('img[src="img/unlocked.png"').src = chrome.runtime.getURL('./img/lock.png');

const beltImages = {
    "img/belt-icon-white.png": "white.png",
    "img/belt-icon-white-yellow.png": "wy.png",
    "img/belt-icon-yellow.png": "yel.png",
    "img/belt-icon-yellow-orange.png": "yo.png",
    "img/belt-icon-orange.png": "org.png"
}

for (let [key, value] of Object.entries(beltImages)) {
    document.querySelectorAll(`img[src="${key}"]`).forEach(img => {
        img.src = chrome.runtime.getURL(`./img/belts/${value}`);
    })
}

document.querySelectorAll('img[src="img/belt-icon-blue-purple.png"]').forEach(img => {
    img.src = chrome.runtime.getURL('./img/belts/bp.png');
})

document.querySelectorAll('img[src="img/belt-icon-blue.png"]').forEach(img => {
    img.src = chrome.runtime.getURL('./img/belts/blu.png');
})

document.querySelector(`div[background="url('/img/knowledge-graph-icon.png') 0px 0px"]`).style.background = chrome.runtime.getURL('./img/dots.png');
alert(document.querySelector(`div[background="url('/img/knowledge-graph-icon.png') 0px 0px"]`));