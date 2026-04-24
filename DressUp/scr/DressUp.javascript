<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
        }

        .container {
            position: relative;
            display: inline-block;
        }

        #corpo {
            width: 370px;
            top: 170px;
            left: 596px;
            position: absolute;
        }

        #cabeca1 {
            width: 220px;
            position: absolute;
            top: 120px;   /* ajusta a posição vertical */
            left: 670px;  /* ajusta a posição horizontal */
        }
        #botao1 {
            width: 100px;
            height: 50px;
            position: absolute;
            top: 140px;   /* ajusta a posição vertical */
            left: 500px;  /* ajusta a posição horizontal */
        }
        #botao2 {
            width: 100px;
            height: 50px;
            position: absolute;
            top: 260px;   /* ajusta a posição vertical */
            left: 500px;  /* ajusta a posição horizontal */
        }
        #botao3 {
            width: 100px;
            height: 50px;
            position: absolute;
            top: 445px;   /* ajusta a posição vertical */
            left: 500px;  /* ajusta a posição horizontal */
        }
        #botao4 {
            width: 100px;
            height: 50px;
            position: absolute;
            top: 620px;   /* ajusta a posição vertical */
            left: 500px;  /* ajusta a posição horizontal */
        }
        #imagem1 { /* chapeu */
            width: 150px;
            position: absolute;
            top: 50px;
            left: 700px;
        }
        #imagem2 { /* camisa */
            width: 225px;
            position: absolute;
            top: 165px;
            left: 667px;
        }
        #imagem3 { /* calca */
            width: 255px;
            position: absolute;
            top: 315px;
            left: 653px;
        }
        #imagem4 { /* sapato */
            width: 255px;
            position: absolute;
            top: 410px;
            left: 654px;
        }
    </style>
</head>
<body>

    <h1>Vista Andrew Garfield!</h1>

    <img id="corpo" src="imagens/corpo.png" class="corpo">
    
    <img id="imagem3" src="">
    <img id="imagem2" src="">
    <img id="imagem4" src="">

    <img id="cabeca1" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fab7daba-d466-4999-aac0-34f4769265de/dfr8cir-b21c0315-f203-42cd-8835-9d4535754eff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mYWI3ZGFiYS1kNDY2LTQ5OTktYWFjMC0zNGY0NzY5MjY1ZGUvZGZyOGNpci1iMjFjMDMxNS1mMjAzLTQyY2QtODgzNS05ZDQ1MzU3NTRlZmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4K7GS7uEJOIPb5viBxtZNaaKTOkAWwUS97WehzzjMFk" >
    <img id="imagem1" src="">

    <button id="botao1">Chapéus -></button>
    <button id="botao2">Camisas -></button>
    <button id="botao3">Calças -></button>
    <button id="botao4">Sapatos -></button>

    <script>
        var botao1 = document.getElementById("botao1");
        var botao2 = document.getElementById("botao2");
        var botao3 = document.getElementById("botao3");
        var botao4 = document.getElementById("botao4");

        var imagem1 = document.getElementById("imagem1");
        var imagem2 = document.getElementById("imagem2");
        var imagem3 = document.getElementById("imagem3");
        var imagem4 = document.getElementById("imagem4");

        var pos1 = 0;
        botao1.onclick = function() {
            pos1 ++;
            if(pos1 > 3) {
                pos1 = 0;
            }
            mudarImagem()
        }

        var pos2 = 0;
        botao2.onclick = function() {
            pos2 ++;
            if(pos2 > 3) {
                pos2 = 0;
            }
            mudarImagem()
        }

        var pos3 = 0;
        botao3.onclick = function() {
            pos3 ++;
            if(pos3 > 3) {
                pos3 = 0;
            }
            mudarImagem()
        }

        var pos4 = 0;
        botao4.onclick = function() {
            pos4 ++;
            if(pos4 > 3) {
                pos4 = 0;
            }
            mudarImagem()
        }
        function mudarImagem() {
            if(pos1 == 0) {
                imagem1.src = "";
            }else if(pos1 == 1) {
                imagem1.src = "https://static.vecteezy.com/system/resources/thumbnails/027/941/762/small/purple-cap-sports-hat-baseball-caps-png.png";
            }else if(pos1 == 2) {
                imagem1.src = "https://png.pngtree.com/png-vector/20240508/ourmid/pngtree-cowboy-hat-isolated-on-transparent-background-png-image_12379917.png";
            }else if(pos1 == 3) {
                imagem1.src = "https://i0.wp.com/the-hatter.com/wp-content/uploads/2023/04/CARTOLA-INGLESA.png?fit=850%2C656&ssl=1";
            }
            if(pos2 == 0) {
                imagem2.src = "";
            }else if(pos2 == 1) {
                imagem2.src = "imagens/camisa1.png";
            }else if(pos2 == 2) {
                imagem2.src = "imagens/camisa2.png";
            }else if(pos2 == 3) {
                imagem2.src = "imagens/camisa3.png";
            }
            if(pos3 == 0) {
                imagem3.src = "";
            }else if(pos3 == 1) {
                imagem3.src = "imagens/calca1.png";
            }else if(pos3 == 2) {
                imagem3.src = "imagens/calca2.png";
            }else if(pos3 == 3) {
                imagem3.src = "imagens/calca3.png";
            }
            if(pos4 == 0) {
                imagem4.src = "";
            }else if(pos4 == 1) {
                imagem4.src = "imagens/sapato1.png";
            }else if(pos4 == 2) {
                imagem4.src = "imagens/sapato2.png";
            }else if(pos4 == 3) {
                imagem4.src = "imagens/sapato3.png";
            }
        }

    </script>

</body>
</html>
