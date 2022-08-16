let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3




function iniciarJuego(){
    let botonMasoctaJugador=document.getElementById('boton-mascota')
    botonMasoctaJugador.addEventListener('click',selecionarMascotaJugador)

    let botonFuego    = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua= document.getElementById('boton-agua')
        botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click',ataqueTierra)

    let botonAire = document.getElementById('boton-aire')
        botonAire.addEventListener('click',ataqueAire)

    let botonTrueno = document.getElementById('boton-trueno')
        botonTrueno.addEventListener('click',ataqueTrueno)
    let botonReiniciar=document.getElementById('btn-reiniciar')
        botonReiniciar.addEventListener('click',reiniciarJuego)    
}
function selecionarMascotaJugador(){    
    
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipeo=document.getElementById('capipeo')
    let inputRatigueya=document.getElementById('ratigueya')
    let inputLangostelvis=document.getElementById('langostelvis')
    let inputTucapalma=document.getElementById('tucapalma')
    let inputPydos=document.getElementById('pydos')
    let spanMacotaJugador=document.getElementById('mascota-jugador')

        if (inputHipodoge.checked){
            spanMacotaJugador.innerHTML='Hipodoge'
        }else if (inputCapipeo.checked){
            spanMacotaJugador.innerHTML='Capipeo'
        }else if (inputRatigueya.checked){
            spanMacotaJugador.innerHTML='Ratigueya'
        }else if (inputLangostelvis.checked){
            spanMacotaJugador.innerHTML='Langostelvis'
        }else if (inputTucapalma.checked){
            spanMacotaJugador.innerHTML='Tucapalma'
        }else if (inputPydos.checked){
            spanMacotaJugador.innerHTML='Pydos'
        } else{
            alert('SELECCIONA UNA MASCOTA')
        }
        selecionarMascotaEnemigo()    
}
function selecionarMascotaEnemigo(){
    let mascotaAleatorio=aleatorio(1,6)
    let spanMacotaEnemigo=document.getElementById('mascota-enemigo')    
        if(mascotaAleatorio==1){
            spanMacotaEnemigo.innerHTML='Hipodoge'
        }else if(mascotaAleatorio==2){
            spanMacotaEnemigo.innerHTML='Capipeo'
        }else if(mascotaAleatorio==3){
            spanMacotaEnemigo.innerHTML='Ratigueya'
        }else if(mascotaAleatorio==4){
            spanMacotaEnemigo.innerHTML='Langostelvis'
        }else if(mascotaAleatorio==5){
            spanMacotaEnemigo.innerHTML='Tucapalma'
        }else {
            spanMacotaEnemigo.innerHTML='Pydos'
        }
}

    function ataqueFuego(){
        ataqueJugador='FUEGO🔥'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataqueJugador='AGUA 💧'
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador='TIERRA 🌱'
        ataqueAleatorioEnemigo()
    }
    function ataqueAire(){
        ataqueJugador='AIRE💨'
        ataqueAleatorioEnemigo()
    }
    function ataqueTrueno(){
        ataqueJugador='TRUENO ⛈️'
        ataqueAleatorioEnemigo()
    }

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)

        if ( ataqueAleatorio==1){
            ataqueEnemigo='FUEGO🔥'
        }else if ( ataqueAleatorio==2){
            ataqueEnemigo='AGUA 💧'
        }else if ( ataqueAleatorio==3){
            ataqueEnemigo='TIERRA 🌱'
        }else if ( ataqueAleatorio==4){
            ataqueEnemigo='AIRE💨'
        }else {
            ataqueEnemigo='TRUENO ⛈️'
        }
      combate()
}
function combate(){
    let spanVidasJugador=document.getElementById('vidas-jugador')
    let spanVidasEnemigo=document.getElementById('vidas-enemigo')
 if (ataqueEnemigo==ataqueJugador){
    crearMensaje('EMPATE')
}else if(ataqueJugador== 'TRUENO ⛈️' && ataqueEnemigo=='AIRE💨'){
    crearMensaje('EMPATE')
    

}else if(ataqueJugador== 'FUEGO🔥' && ataqueEnemigo=='TIERRA 🌱'){
     crearMensaje('GANASTE')
     vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo

}else if(ataqueJugador== 'AGUA 💧' && ataqueEnemigo=='FUEGO🔥'){
    crearMensaje('GANASTE')
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo

}else if(ataqueJugador== 'TIERRA 🌱' && ataqueEnemigo=='AGUA 💧'){
    crearMensaje('GANASTE')
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo

}else if(ataqueJugador== 'AIRE💨' && ataqueEnemigo=='FUEGO🔥'){
    crearMensaje('GANASTE')
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else if(ataqueJugador== 'TRUENO ⛈️' && ataqueEnemigo=='AGUA 💧'){
    crearMensaje('GANASTE')
    vidasEnemigo--
    spanVidasEnemigo.innerHTML=vidasEnemigo
}else {
    crearMensaje('PERDISTE')
    vidasJugador--
    spanVidasJugador.innerHTML=vidasJugador
}

revisarVidas()

}
function revisarVidas(){
    if (vidasEnemigo==0){
        mensajeFinal('FELICITACIONES!! GANASTE🎉🎉🎉🎉')

    }else if(vidasJugador==0){
        mensajeFinal('UPS!! PERDISTE 😥😥😭')

    }

}

function crearMensaje(resultadoBatalla){
    let sectionMensajes=document.getElementById('mensajes')

    let parrafo= document.createElement('p')
    parrafo.innerHTML='Tu mascota atacó con '+ ataqueJugador +' , la mascota del enemigo ataco con '+ ataqueEnemigo+''+ resultadoBatalla
     sectionMensajes.appendChild(parrafo)
}
function mensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('mensajes')

    let parrafo= document.createElement('p')
    parrafo.innerHTML=resultadoFinal
    sectionMensajes.appendChild(parrafo)

        let botonFuego    = document.getElementById('boton-fuego')
            botonFuego.disabled=true
        let botonAgua= document.getElementById('boton-agua')
            botonAgua.disabled=true
        let botonTierra = document.getElementById('boton-tierra')
            botonTierra.disabled=true
        let botonAire = document.getElementById('boton-aire')
            botonAire.disabled=true
        let botonTrueno = document.getElementById('boton-trueno')
            botonTrueno.disabled=true
        
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min +1)+ min)
}



window.addEventListener('load',iniciarJuego)