function validar(form){
let array=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
let dni=form.dni.value.trim()

let dniletra=form.dniletra.value.trim()
let DNILETRA=dniletra.toUpperCase()


if(dni<0 || dni>99999999 || isNaN(dni) || dni==''){
    alert("Ingresa un numero valido")
    return false;
}else{
    let operacion=dni%23
    let letraCalculada=array[operacion]
    alert("Tu letra es:"+letraCalculada)
    if(letraCalculada==DNILETRA){
        alert("El DNI y la Letra son correctos")
    }else{
        alert("La letra que ha indicado no es correcta")
    }
}
return true;
}

