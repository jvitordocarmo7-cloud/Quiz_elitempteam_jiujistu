<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Jiu-Jitsu</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <h1>🥋 Quiz de Jiu-Jitsu</h1>

    <div id="quiz">

        <h2 id="pergunta"></h2>

        <div id="respostas"></div>

        <button id="proxima">Próxima</button>

    </div>

    <div id="resultado" class="escondido">

        <h2>Resultado</h2>

        <p id="pontuacao"></p>

        <button onclick="reiniciarQuiz()">
            Jogar Novamente
        </button>

    </div>

</div>

<script src="script.js"></script>

</body>
</html>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#0f0f0f;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:95%;
    max-width:700px;
    background:#1a1a1a;
    padding:30px;
    border-radius:15px;
    box-shadow:0 0 20px rgba(255,215,0,.25);
}

h1{
    text-align:center;
    color:#FFD700;
    margin-bottom:30px;
}

h2{
    margin-bottom:20px;
}

#respostas{
    display:flex;
    flex-direction:column;
    gap:15px;
}

button{
    width:100%;
    padding:15px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    font-size:17px;
    transition:.3s;
}

#respostas button{
    background:#2c2c2c;
    color:#fff;
}

#respostas button:hover{
    background:#FFD700;
    color:#000;
}

#proxima{
    margin-top:25px;
    background:#FFD700;
    color:#000;
    font-weight:bold;
}

#proxima:hover{
    background:#e6c200;
}

.escondido{
    display:none;
}

#resultado{
    text-align:center;
}

#pontuacao{
    font-size:24px;
    margin:25px 0;
    color:#FFD700;
}

@media(max-width:600px){

.container{
padding:20px;
}

h1{
font-size:28px;
}

button{
font-size:16px;
padding:14px;
}

}
const perguntas = [
  {
    pergunta: "Em uma luta oficial, qual posição vale 4 pontos?",
    respostas: [
      "Montada",
      "Pegada na gola",
      "Meia-guarda",
      "Raspagem"
    ],
    correta: 0
  },
  {
    pergunta: "Quanto vale uma raspagem bem-sucedida?",
    respostas: [
      "1 ponto",
      "2 pontos",
      "3 pontos",
      "4 pontos"
    ],
    correta: 1
  },
  {
    pergunta: "Quanto vale uma passagem de guarda?",
    respostas: [
      "2 pontos",
      "3 pontos",
      "4 pontos",
      "Não pontua"
    ],
    correta: 1
  },
  {
    pergunta: "O que acontece se um atleta desiste batendo no adversário ou no tatame?",
    respostas: [
      "Recebe vantagem",
      "Empata a luta",
      "Perde por finalização",
      "Recebe punição"
    ],
    correta: 2
  },
  {
    pergunta: "Qual posição vale 2 pontos?",
    respostas: [
      "Montada",
      "Queda",
      "Pegada de costas",
      "Joelho na barriga"
    ],
    correta: 1
  }
];

let indice = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const proxima = document.getElementById("proxima");

function carregarPergunta() {

  respostas.innerHTML = "";

  pergunta.innerText = perguntas[indice].pergunta;

  perguntas[indice].respostas.forEach((resp, i) => {

    const botao = document.createElement("button");

    botao.innerText = resp;

    botao.onclick = () => verificar(i);

    respostas.appendChild(botao);

  });

}

function verificar(resposta) {

  if (resposta === perguntas[indice].correta) {
    pontos++;
  }

  Array.from(respostas.children).forEach(btn => {
    btn.disabled = true;
  });

}

proxima.onclick = () => {

  indice++;

  if (indice < perguntas.length) {

    carregarPergunta();

  } else {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("resultado").classList.remove("escondido");

    document.getElementById("pontuacao").innerText =
      `Você acertou ${pontos} de ${perguntas.length} perguntas!`;

  }

}

function reiniciarQuiz() {

  indice = 0;
  pontos = 0;

  document.getElementById("quiz").style.display = "block";

  document.getElementById("resultado").classList.add("escondido");

  carregarPergunta();

}

carregarPergunta();
