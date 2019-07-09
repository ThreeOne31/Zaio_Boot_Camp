var changeDisplay = document.getElementsByClassName("controlled");

function controllerFunction(elmnt) {
    var sum = 0;
    var clrName = document.getElementById("clrName");
    var ASCII_Sum = document.getElementById("ASCII-Sum");

    document.getElementById("initailtext").innerHTML ="";

    clr = elmnt.className;
    changeDisplay[0].style.backgroundColor = clr;
    clrName.innerHTML = "hi, my name is " + clr;

    for(index =0; index<clr.length; index++){
        sum= sum+clr.charCodeAt(index); 
    }

    ASCII_Sum.innerHTML = "ASCII sum is " + sum;
  }