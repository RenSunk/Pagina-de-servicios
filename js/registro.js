
const auth = firebase.auth();
const db = firebase.database();




function writeUserData(userId, nombre,apellido, email) {
  firebase.database().ref('usuario/' + userId).set({
    nombre: nombre,
    apellido:apellido,
    id:userId,
    email:email,
    imagen:"none"          
  }).then(function(){
    location.href = "./solicitarservicio.html";
  });
}


function registrar_usuario(){
    
  let mensaje = document.getElementById("mensaje");

  let nombre=document.getElementById("Rnombre").value;
  let apellido=document.getElementById("Rapellido").value;
  let email=document.getElementById("Remail").value;
  let contra=document.getElementById("Rcontra").value;
  let contrav=document.getElementById("Rcontrav").value;

  if(nombre == "" || apellido == "" || email == "" || contra == "" || contrav  == ""){
      mensaje.innerHTML = "No puede tener ningun campo vacio";
  }if(contra.length <= 6 || contrav.length <= 6 ){
    mensaje.innerHTML = "la contraseña no puede tener menos de  6 caracteres";
  }else{
    if(contra != contrav){
           mensaje.innerHTML = "Las contraseñas tienen que ser iguales";
    }else{
      //codigo del modal para decir que se esta creando la cuenta
      auth.createUserWithEmailAndPassword(email, contra)
      .then(function(){
        //codigo del modal para decir que se creo la cuenta 

        auth.signInWithEmailAndPassword(email, contra)
        .then(function(){
          //codigo del modal para decir que se esta iniciando seccion 

          auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var usuario = {
                nombre: nombre,
                apellido:apellido,
              }
              localStorage.setItem("datos",JSON.stringify(usuario));

              var userId = user.uid;
              console.log(userId);

              writeUserData(userId,nombre,apellido,email)
            }
          })

        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        mensaje.innerHTML = "Error:"+errorCode
      });
    }
  }
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

$elemento[3].addEventListener("mouseover", function(){
    $linea[3].style.width = "100%";
    $linea[3].style.transition ="width 520ms";
});

$elemento[3].addEventListener("mouseout", function(){
    $linea[3].style.width = "0%"; 
});

$elemento[4].addEventListener("mouseover", function(){
    $linea[4].style.width = "100%";
    $linea[4].style.transition ="width 520ms";
});

$elemento[4].addEventListener("mouseout", function(){
    $linea[4].style.width = "0%"; 
});

$elemento[5].addEventListener("mouseover", function(){
    $linea[5].style.width = "100%";
    $linea[5].style.transition ="width 520ms";
});

$elemento[5].addEventListener("mouseout", function(){
    $linea[5].style.width = "0%"; 
});
