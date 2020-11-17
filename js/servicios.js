


const db = firebase.database();
const auth = firebase.auth();
startTime();

if(localStorage.getItem("datos")){

    const objectos = localStorage.getItem("datos");
    const usuario = JSON.parse(objectos);
    
    nombre = document.getElementById("Anombre");
    nombre.innerHTML = "Nombre: "+usuario.nombre;
    
    const apellido = document.getElementById("Aapellido");
    apellido.innerHTML = "Apellido: "+usuario.apellido;
    
    const email = document.getElementById("Aemail");
    email.innerHTML = "Correo Electronico: "+usuario.email;
    
    const img = document.getElementsByClassName("imagen-perfil-pequeña")[0];

    if(usuario.imagen == "none"){
        img.src = "./img/user.png"
    }else{
        img.src = usuario.imagen;
    }
    

    const img2 = document.getElementsByClassName("imagen_perfil-abajo")[0];

    if(usuario.imagen == "none"){
        img2.src = "./img/user.png"
    }else{
        img2.src = usuario.imagen;
    }

}

function salir_cuenta(){
    
    auth.signOut()
        .then(function() {
        localStorage.removeItem("datos");
        console.log("desconexion exitosa");
        location.href ="./index.html";
      })
      .catch(function(error) {
          
        console.log("Error :"+error);
    });
}


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





//codigo de internet, no tocar 

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span> PM </span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + ap ;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}