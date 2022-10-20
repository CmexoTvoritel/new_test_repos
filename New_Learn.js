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

field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if(ballCoords.top < 0) ballCoords.top = 0;
    if(ballCoords.left < 0) ballCoords.left = 0;

    if(ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if(ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
    
//place for functions(end)

google_web();

document.body.style.background = prompt("What color of background do you want to set?", "white");

elem.style.color = 'red';

some_information.style.offsetHeight = '100px'; 
some_information.style.offsetWeigth = '100px';
some_information.style.overflow = '';

//setInterval(() => elem.hidden = !elem.hidden, 1000);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hello everyone!</strong> You read important information!";
document.body.append(div);


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}