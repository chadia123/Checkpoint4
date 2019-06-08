function myFunction() {

    if(document.getElementById("p1").style.fontWeight == "normal")
    {
        document.getElementById("p1").style.fontWeight = "bold";
    }else {
        document.getElementById("p1").style.fontWeight = "normal";
    } 
}

function myFunctionJus() {

    if((document.getElementById("p1").style.textAlign) != "justify")
    {
        document.getElementById("p1").style.textAlign = "justify";
    } 
}
function myFunctionUnd() {
    if((document.getElementById("p1").style.textDecoration) != "underline")
    {
        document.getElementById("p1").style.textDecoration = "underline";}
        else
        {
            document.getElementById("p1").style.textDecoration="none";

        }

    }
function MyfunctionF() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("p1").style.fontSize =x; 
}
function MyfunctionS() {
    var x = document.getElementById("myS").value;
    document.getElementById("p1").style.fontFamily=x; 
}
