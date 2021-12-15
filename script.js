const dino = document.querySelector(".dino");

// Pular 
//identificando quando o usuario clicou
function handleKeyUp(event) {
    if(event.keyCode === 32) { // 32 é o espaço
        jump()
    }else if (event.keyCode === 38) {
        jump()
    };
};

// o pulo
function jump() {
    let position = 0;

    let upInterval = setInterval(() => {
        if(position >= 150) {
            //Para de subir 
            clearInterval(upInterval);

            //descendo 
            let downInterval = setInterval(() => {
                if (position <= 0 ) {
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
// criar um evento de click na tela
document.addEventListener('keyup', handleKeyUp);