
const $elemento = document.getElementsByClassName("hover-linea-a");
const $linea = document.getElementsByClassName("linea");

$elemento[0].addEventListener("mouseover", function(){
    $linea[0].style.width = "100%";
    $linea[0].style.transition ="width 520ms";
});

$elemento[0].addEventListener("mouseout", function(){
    $linea[0].style.width = "0%"; 
});

$elemento[1].addEventListener("mouseover", function(){
    $linea[1].style.width = "100%";
    $linea[1].style.transition ="width 520ms";
});

$elemento[1].addEventListener("mouseout", function(){
    $linea[1].style.width = "0%"; 
});

$elemento[2].addEventListener("mouseover", function(){
    $linea[2].style.width = "100%";
    $linea[2].style.transition ="width 520ms";
});

$elemento[2].addEventListener("mouseout", function(){
    $linea[2].style.width = "0%"; 
});

$elemento[3].addEventListener("mouseover", function(){
    $linea[3].style.width = "100%";
    $linea[3].style.transition ="width 520ms";
});

$elemento[3].addEventListener("mouseout", function(){
    $linea[3].style.width = "0%"; 
});