var opens = document.getElementsByClassName("open");
var closes = document.getElementsByClassName("close");
for (let i = 0; i < opens.length; i++) {
    //console.log(i);
    opens[i].onclick = function() {
        var modals = document.getElementsByClassName("modal");
        console.log("open");
        for (let j = 0; j < modals.length; j++) {
            modals[j].style.display = "block";
        }
    }
}
for (let i = 0; i < closes.length; i++) {
    //console.log(i);
    closes[i].onclick = function() {
        var modals = document.getElementsByClassName("modal");
        console.log("close");
        for (let j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
        }
    }
}
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
window.addEventListener("load", function(event) {
    if (event.target != event.currentTarget && event.target.body.scrollWidth > event.currentTarget.screen.width && event.currentTarget.screen.width/event.currentTarget.screen.height > 5.0/3.0) {
        let scale = event.currentTarget.screen.width/event.target.body.scrollWidth;
        scale *= 100.0;
        event.target.body.style["zoom"] = scale+"%";
    }
});
/*
console.log(document.body.scrollWidth);
console.log(document.body.scrollHeight);
console.log(document.body.scrollWidth/document.body.scrollHeight);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.width/window.screen.height);
console.log(window.screen.orientation);
let query = "(pointer: coarse)"
if (window.matchMedia(query).matches) {
    console.log(query);
}
*/

