// Funciones para validacion de formulario login
export function validarEmail(input){
    let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
export function validarPassword(input){
    let expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
// validaciones para formulario producto

// validar codigo
export function validarCodigo(input){
    if( input.value.trim().length >= 3 && input.value.trim().length <=50 ){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarNombre(input){
    if( input.value.trim().length >= 3 && input.value.trim().length <=30 ){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
export function validarDescripcion(input){
    if( input.value.trim().length >= 10 && input.value.trim().length <=200 ){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}



