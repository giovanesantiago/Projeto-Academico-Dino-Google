const dino = document.querySelector(".dino");
const background = document.querySelector(".background") 
// evitando pulo durante o pulo
let isjump = false
let position = 0;


// Pular 
//identificando quando o usuario clicou
function handleKeyUp(event) {
    if(event.keyCode === 32) { // 32 é o espaço
        if(!isjump){
            jump()
        }
    }else if (event.keyCode === 38) {
        if(!isjump){
            jump()
        }
    };
};

// o pulo
function jump() {
    isjump = true
    

    let upInterval = setInterval(() => {
        if(position >= 150) {
            //Para de subir 
            clearInterval(upInterval);

            //descendo 
            let downInterval = setInterval(() => {
                if (position <= 0 ) {
                    //Parando de descer 
                    isjump = false
                    clearInterval(downInterval)
                }else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
        
    }, 20);
};


//cactus 
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime)

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    // movendo cactus 
    let leftInterval = setInterval(() => {
        if(cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Perdeu Otario </h1>'
        }else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)

    setTimeout(createCactus, randomTime);
}

// criar um evento de click na tela
document.addEventListener('keyup', handleKeyUp);
//inicializando ja com cactu 
createCactus()
