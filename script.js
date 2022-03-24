const tecnologia = ["java","php","javascript","python","ruby","c","react","node","canvas","html","css","typescrypt","kotlin","swift"];
const palavraSecreta = tecnologia[Math.floor(Math.random() * tecnologia.length)];

const letrasCorretas = [];
const letrasErradas = []; 

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode

    if(isLetra(codigo)){
        const letra = evento.key
        if(letrasErradas.includes(letra)){
            mostrarAvisoLetraRepetida()
        }else{
            if(palavraSecreta.includes(letra)){
                letrasCorretas.push(letra)
            }else{
                letrasErradas.push(letra)
            }
        }
        atualizarJogo();
    }
})

function atualizarJogo(){
    mostrarLetrasErradas();
    mostrarLetrasCertas();
    desenharForca();
    checarJogo();
}

function mostrarLetrasErradas(){
    const div = document.querySelector(".letras-erradas-container");
    div.innerHTML = "<h3>Letras erradas</h3>"
    letrasErradas.forEach(letra => {
        div.innerHTML += `<span>${letra}</span>`
    })
}

function mostrarLetrasCertas(){
    const container = document.querySelector(".palavra-secreta-container")
    container.innerHTML = ""
    palavraSecreta.split("").forEach(letra => {
        if(letrasCorretas.includes(letra)){
            container.innerHTML += `<span>${letra}</span>`
        }else{
            container.innerHTML += `<span>_</span>`
        }
    })
}

function mostrarAvisoLetraRepetida(){
    const aviso = document.querySelector(".aviso-palavra-repetida")
    aviso.classList.add("show")
    setTimeout(() => {
        aviso.classList.remove("show")
    },1000)
}

function checarJogo(){
    const partesCorpo = document.querySelectorAll(".forca-parte")
    const container = document.querySelector(".palavra-secreta-container")
    let mensagem = "";

    if(letrasErradas.length === partesCorpo.length){
        mensagem = "Game Over!"
    }
    if(palavraSecreta === container.innerText){
        mensagem = "Parabéns! Você ganhou!"
    }
    if(mensagem){
        document.querySelector("#mensagem").innerHTML = mensagem
        document.querySelector(".popup-container").style.display= "flex"
    }
}

function desenharForca(){
    const partesCorpo = document.querySelectorAll(".forca-parte")
    for(let i=0; i<letrasErradas.length; i++){
        partesCorpo[i].style.display="block";
    }
}


function isLetra(codigo){          //cod 65 a 90
    return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo(){
    window.location.reload()
}

//Finish   :)
//See you later

