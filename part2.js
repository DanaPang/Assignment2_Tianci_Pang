var $ = function (id){
    return document.getElementById(id);
}

var hideCapital = function () {
    $("capital").style.visibility="hidden";
}

var showCapital = function() {
    if ($("capital").style.visibility==="hidden") {
        $("capital").style.visibility="visible";
    }
}

var toggle = function () {
    if ($("capital").style.visibility==="hidden") {
        $("capital").style.visibility="visible";
    } else {
        $("capital").style.visibility="hidden";
    }
}

var changeToYellow = function (){
    $("back").style.backgroundColor='#FFFF00';
}

var changeToGreen = function (){
    $("back").style.backgroundColor='#90ee90'
}

window.onload=function(){
    $("hide").onclick=hideCapital;
    $("show").onclick=showCapital;
    $("toggle").onclick=toggle;
    $("yellow").onmouseover=changeToYellow;
    $("green").onclick=changeToGreen;
}

/*
document.addEventListener("DOMContentLoaded", function() {
    $("hide").onclick = hideCapital;
});
*/
