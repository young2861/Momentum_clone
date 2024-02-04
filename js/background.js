const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//chosenImage = "francesco-ungaro-BIUPQYEAhXo-unsplash.jpg";
/*
const sst = document.styleSheets[0];
console.log(sst);
const bodySelector = "body";
const bgProperty = "background-image";
const value = `url(${chosenImage})`;

for(let i = 0; i < sst.cssRules.length; i++) {
    let rule = sst.cssRules[i];
    if(rule.selectorText === bodySelector) {
        rule.style[bgProperty] = value;
        break;
    }
}

console.log("loop ends");
*/
/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
*/