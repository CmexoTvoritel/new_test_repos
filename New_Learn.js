"use strict";
 
function google_web() {
    if(confirm("Перейти на Google.com?")) {
        location.href = "https://google.com";
    }
}
    
google_web();

elem.style.color = 'red';

setInterval(() => elem.hidden = !elem.hidden, 1000);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hello everyone!</strong> You read important information!";
document.body.append(div);