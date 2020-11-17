

const db = firebase.database();
const auth = firebase.auth();

var modal = document.getElementById("myModal");
var modaltexto = document.getElementById("modal-texto");
const $botoninicio = document.getElementById("inicio-form");
const $focus = document.getElementById("focus-contra");

let texto = document.getElementById("textito");

$focus.addEventListener("submit", (event) => {
    event.preventDefault();
    const contraF = document.getElementById("contra");
    console.log(contra);
    contraF.focus();
})

$botoninicio.addEventListener("submit", (event) => {
    event.preventDefault();
    consola();
})

function consola() {

    modal.style.display = "block";

    let email = document.getElementById("email").value;
    let contra = document.getElementById("contra").value;

    if (email == "" || contra == "") {
        texto.innerHTML = "no puede dejar ningun campo vacio";
        modal.style.display = "none";
    } else {
        modaltexto.innerHTML = "verificando en firebase";
        auth.signInWithEmailAndPassword(email, contra)
            
            .then(function () {
                auth.onAuthStateChanged(function (user) {
                    if (user) {
                        console.log(user);
                        let uid = user.uid;
                        let nombre = "";
                        let apellido = "";
                        modaltexto.innerHTML = "descargando informacion";
                        //metodo que se llama cada vez que ocurre un cambio
                        var starCountRef = firebase.database().ref('usuario/' + uid);
                        starCountRef.on('value', function (snapshot) {
                            nombre = snapshot.val().nombre;
                            apellido = snapshot.val().apellido;
                            var usuario = {
                                id: uid,
                                "nombre": nombre,
                                "apellido": apellido,
                                email: email,
                                imagen:snapshot.val().imagen
                            };
                            modaltexto.innerHTML = "Todo Listo :)";
                            var usuarioJSON = JSON.stringify(usuario);
                            localStorage.setItem("datos", usuarioJSON);
                            modal.style.display = "none";
                            location.href = "./solicitarservicio.html"
                        });

                    } else {
                        modal.style.display = "none";
                        console.log("jum");
                    }
                });

            })
            .catch(function (error) {
                modal.style.display = "none";
                var errorCode = error.code;
                var errorMessage = error.message;
                texto.innerHTML = "error de inicio";
            }
        )
    }
}


document.getElementById("boton-g").addEventListener("click", function () {
    modal.style.display = "block";
    modaltexto.innerHTML = "Iniciando en google";
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {

        var token = result.credential.accessToken;
        var user = result.user;
        var nombre, apellido;

        //leer datos

        var starCountRef = firebase.database().ref('usuario/' + user.uid);
        if (starCountRef.on('value', () => {

        })) {
            console.log("si")
        } else {
            console.log("no")
        }
        var usuario = {
            id: "",
            "nombre": "",
            "apellido": "",
            email: "",
            imagen: ""
        };

        modaltexto.innerHTML = "verificando datos";

        starCountRef.on('value', function (snapshot) {
            try {
                nombre = snapshot.val().nombre;
                apellido = snapshot.val().apellido;
                var email = snapshot.val().email;
                modaltexto.innerHTML = "descargando datos";


                usuario = {
                    id: snapshot.val().id,
                    "nombre": nombre,
                    "apellido": apellido,
                    email: email,
                    imagen: snapshot.val().imagen
                };

                var usuarioJSON = JSON.stringify(usuario);
                localStorage.setItem("datos", usuarioJSON);
                modal.style.display = "none";
                location.href = "./solicitarservicio.html"
            } catch (error) {
                modaltexto.innerHTML = "creando datos";
                if (user.providerData[0].displayName.split(" ").length == 4) {
                    console.log("entra 0")
                    nombre = user.providerData[0].displayName.split(" ")[0] + " " + user.providerData[0].displayName.split(" ")[1];
                    apellido = user.providerData[0].displayName.split(" ")[2] + " " + user.providerData[0].displayName.split(" ")[3];
                } else if (user.providerData[0].displayName.split(" ").length == 3) {
                    console.log("entra 1")
                } else if (user.providerData[0].displayName.split(" ").length == 2) {
                    console.log("entra 2")
                    nombre = user.providerData[0].displayName.split(" ")[0];
                    apellido = user.providerData[0].displayName.split(" ")[1];
                } else {
                    console.log("entra 3")
                    nombre = user.providerData[0].displayName.split(" ")[0];
                    apellido = "";
                }

                var usuario = {
                    email: user.providerData[0].email,
                    uid: user.uid,
                    imagen: user.providerData[0].photoURL,
                    nombre: nombre,
                    apellido: apellido
                }


                firebase.database().ref('usuario/' + usuario.uid).set({
                    nombre: nombre,
                    apellido: apellido,
                    id: usuario.uid,
                    email: usuario.email,
                    imagen: usuario.imagen
                }).then(function () {
                    localStorage.setItem("datos", JSON.stringify(usuario));
                    modal.style.display = "none";
                    modal.style.display = "none";
                    location.href = "./solicitarservicio.html";
                });
            }
        })
    }).catch(function (error) {
        modal.style.display = "none";
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage)
    });
});

document.getElementById("boton-f").addEventListener("click", function () {
    alert("inicio con facebook");
});


//codigo del modal copiado

/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/



//codigo que tengo que ver como lo acorto con un for :( 

const $elemento = document.getElementsByClassName("hover-linea-a");
const $linea = document.getElementsByClassName("linea");

$elemento[0].addEventListener("mouseover", function () {
    $linea[0].style.width = "100%";
    $linea[0].style.transition = "width 520ms";
});

$elemento[0].addEventListener("mouseout", function () {
    $linea[0].style.width = "0%";
});

$elemento[1].addEventListener("mouseover", function () {
    $linea[1].style.width = "100%";
    $linea[1].style.transition = "width 520ms";
});

$elemento[1].addEventListener("mouseout", function () {
    $linea[1].style.width = "0%";
});

$elemento[2].addEventListener("mouseover", function () {
    $linea[2].style.width = "100%";
    $linea[2].style.transition = "width 520ms";
});

$elemento[2].addEventListener("mouseout", function () {
    $linea[2].style.width = "0%";
});

$elemento[3].addEventListener("mouseover", function () {
    $linea[3].style.width = "100%";
    $linea[3].style.transition = "width 520ms";
});

$elemento[3].addEventListener("mouseout", function () {
    $linea[3].style.width = "0%";
});

$elemento[4].addEventListener("mouseover", function () {
    $linea[4].style.width = "100%";
    $linea[4].style.transition = "width 520ms";
});

$elemento[4].addEventListener("mouseout", function () {
    $linea[4].style.width = "0%";
});

$elemento[5].addEventListener("mouseover", function () {
    $linea[5].style.width = "100%";
    $linea[5].style.transition = "width 520ms";
});

$elemento[5].addEventListener("mouseout", function () {
    $linea[5].style.width = "0%";
});

