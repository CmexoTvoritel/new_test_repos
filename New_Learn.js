"use strict";
 
//place for vars (start)

let cats = 0;

//place for vars (end)

//place for functions (start)

function google_web() {
    if(confirm("Перейти на Google.com?")) {
        location.href = "https://google.com";
    }
}

function count_cats() {
    cats++;
    alert("Котик номер " + cats);
}
    
//place for functions(end)

google_web();

document.body.style.background = prompt("What color of background do you want to set?", "white");

elem.style.color = 'red';

some_information.style.offsetHeight = '100px'; 
some_information.style.offsetWeigth = '100px';
some_information.style.overflow = '';

setInterval(() => elem.hidden = !elem.hidden, 1000);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hello everyone!</strong> You read important information!";
document.body.append(div);