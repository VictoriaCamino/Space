// VALIDACION DE FORMULARIO
const nombre = document.getElementById('validationCustom01');
const email = document.getElementById('validationCustomUsername');
const password = document.getElementById('password');
const boton = document.getElementById('btn-enviar');
const resultado = document.querySelector('.resultado');

boton.addEventListener('click', (e)=> {
    e.preventDefault();
    let error = validarCampos();
    if(error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add('denegado');
    }else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add('aprobado');
    }
})

const validarCampos = () => {
    let error = [];
    if(nombre.value.length < 5) {
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 carateres.";
        return error;
    } else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres.";
        return error;
    }else if (email.value.length < 5 ||
              email.value.length > 40 ||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El mail es inválido";
        return error;
    }
    
    error[0] = false;
    return error; 
}



