let imagen = document.querySelector('img[src="imgs/img1.jpg"]');
let posicion = 1 ;
function rotar(){
    if( posicion == 2){
        imagen.src="imgs/img3.jpg";
        posicion = 0;
    }else 
        if ( posicion == 1){
            imagen.src="imgs/img2.jpg";
            posicion = posicion + 1;
        }else
            if (posicion == 0){
                imagen.src="imgs/img1.jpg";
                posicion = posicion + 1;
            }
}
rotar();
setInterval(rotar,5000);

function validar(){
    let name = document.getElementById("nameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let address = document.getElementById("addressInput").value;
    let addressNumber = document.getElementById("addressNumberInput").value;
    let city = document.getElementById("cityInput").value;
    let postalCode = document.getElementById("postalCodeInput").value;
    let message = document.getElementById("messageInput").value;
    let checkTerm = document.getElementById("checkTermsInput").checked;
    let email = document.getElementById("emailInput");
    

    // Definicion de nuestra exprecion regular.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

    if (name.value === null || name.value === ''){
        alert("El campo 'Nombre' es obligatorio!!");
        return false;
    } else {
        true;
    }
    if (lastName.value === null || lastName.value === ''){
        alert("El apellido 'Apellido' es obligatorio!!");
        return false;
    } else {
        true;
    }
    if (address.value === null || address.value === ''){
        alert("El campo 'Dirección' es obligatorio!!");
        return false;
    } else {
        true;
    }
    if (addressNumber.value === null || addressNumber.value === ''){
        alert("El campo 'Número' es obligatorio!!");
        return false;
    } else {
        true;
    }
    if (city.value === null || city.value === ''){
        alert("El campo 'Ciudad' es obligatorio!!");
        return false;
    } else {
        true;
    }
    if (postalCode.value === null || postalCode.value === ''){
        alert("El campo 'Código Potal' es obligatorio!!");
        return false;
    } else {
        true;
    }
    
    //console.log(email.value);

    if (message === null || message === ''){
        alert("El campo 'Mensaje' es obligatorio!!");
        return false;
    } else {
        true;
    }

    if (!checkTerm){
        alert("El campo 'Terminos y Condiciones' es obligatorio!!");
        return false;
    } else {
        true;
    }

    if (validEmail.test(email.value) ){
        //alert('El correo electrónico es válido');
        return true;
    } else {
        alert('El correo electrónico no es válido');
        return false;
    }
}