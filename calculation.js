var $ = function (id){
    return document.getElementById(id);
}


var calculateTotal = function () {
    var total=parseInt($("room").value)+parseInt($("food").value)+parseInt($("entertain").value);
    if (isNaN(total)){
        document.getElementById("total").value= " ";
    }else{
        document.getElementById("total").value=total
    }
    
}
var calculateTax = function () {
    var totalWithTax=(1.13*(parseInt($("room").value)+parseInt($("food").value)+parseInt($("entertain").value))).toFixed(2);
    if (isNaN(totalWithTax)){
        document.getElementById("tax").value=" ";
    }else {
        document.getElementById("tax").value=totalWithTax;
    }
}

/*
window.onload=function(){
    document.getElementById("number").onclick=validateTxt;
    document.getElementById("printResultButton").onclick=printResult;
}
*/
/*
document.addEventListener("DOMContentLoaded", function() {
    $("total").oninput = calculateTotoal;
});
*/