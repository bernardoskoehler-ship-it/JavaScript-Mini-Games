var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");

var imagem1 = document.getElementById("imagem1");
var imagem2 = document.getElementById("imagem2");
var imagem3 = document.getElementById("imagem3");
var imagem4 = document.getElementById("imagem4");

var pos1 = 0;
var pos2 = 0;
var pos3 = 0;
var pos4 = 0;

botao1.onclick = function() {
    pos1++;

    if(pos1 > 3) {
        pos1 = 0;
    }

    mudarImagem();
}

botao2.onclick = function() {
    pos2++;

    if(pos2 > 3) {
        pos2 = 0;
    }

    mudarImagem();
}

botao3.onclick = function() {
    pos3++;

    if(pos3 > 3) {
        pos3 = 0;
    }

    mudarImagem();
}

botao4.onclick = function() {
    pos4++;

    if(pos4 > 3) {
        pos4 = 0;
    }

    mudarImagem();
}

function mudarImagem() {
    mudarChapeu();
    mudarCamisa();
    mudarCalca();
    mudarSapato();
}

function mudarChapeu() {
    if(pos1 == 0) {
        imagem1.src = "";
    } else if(pos1 == 1) {
        imagem1.src = "https://static.vecteezy.com/system/resources/thumbnails/027/941/762/small/purple-cap-sports-hat-baseball-caps-png.png";
    } else if(pos1 == 2) {
        imagem1.src = "https://png.pngtree.com/png-vector/20240508/ourmid/pngtree-cowboy-hat-isolated-on-transparent-background-png-image_12379917.png";
    } else if(pos1 == 3) {
        imagem1.src = "https://i0.wp.com/the-hatter.com/wp-content/uploads/2023/04/CARTOLA-INGLESA.png?fit=850%2C656&ssl=1";
    }
}

function mudarCamisa() {
    if(pos2 == 0) {
        imagem2.src = "";
    } else if(pos2 == 1) {
        imagem2.src = "imagens/camisa1.png";
    } else if(pos2 == 2) {
        imagem2.src = "imagens/camisa2.png";
    } else if(pos2 == 3) {
        imagem2.src = "imagens/camisa3.png";
    }
}

function mudarCalca() {
    if(pos3 == 0) {
        imagem3.src = "";
    } else if(pos3 == 1) {
        imagem3.src = "imagens/calca1.png";
    } else if(pos3 == 2) {
        imagem3.src = "imagens/calca2.png";
    } else if(pos3 == 3) {
        imagem3.src = "imagens/calca3.png";
    }
}

function mudarSapato() {
    if(pos4 == 0) {
        imagem4.src = "";
    } else if(pos4 == 1) {
        imagem4.src = "imagens/sapato1.png";
    } else if(pos4 == 2) {
        imagem4.src = "imagens/sapato2.png";
    } else if(pos4 == 3) {
        imagem4.src = "imagens/sapato3.png";
    }
}
