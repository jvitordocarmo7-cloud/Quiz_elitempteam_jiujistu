// Quiz Data by Difficulty Level
const quizData = {
    easy: [
        {
            question: "Qual é a faixa inicial no jiu-jitsu?",
            options: ["Preta", "Branca", "Azul", "Roxa"],
            correct: 1
        },
        {
            question: "Em quantas posições o jiu-jitsu é geralmente dividido?",
            options: ["2", "3", "4", "5"],
            correct: 3
        },
        {
            question: "Qual é a posição mais vantajosa no jiu-jitsu?",
            options: ["Guard", "Mount", "Side control", "Back control"],
            correct: 1
        },
        {
            question: "Quantos pontos vale um takedown?",
            options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
            correct: 1
        },
        {
            question: "O que é 'passing the guard'?",
            options: ["Escapar da guarda", "Sair do tatami", "Destruir a guarda do adversário", "Aplicar um golpe"],
            correct: 2
        },
        {
            question: "Quantos pontos vale um touchdown?",
            options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
            correct: 3
        },
        {
            question: "Qual é a duração de um combate de faixa branca iniciante?",
            options: ["3 minutos", "5 minutos", "8 minutos", "10 minutos"],
            correct: 0
        },
        {
            question: "O que significa 'Sub' no jiu-jitsu?",
            options: ["Substituição", "Submissão", "Subida", "Subtração"],
            correct: 1
        },
        {
            question: "Qual é a faixa mais alta no jiu-jitsu?",
            options: ["Vermelha", "Preta", "Coral", "Branca"],
            correct: 2
        },
        {
            question: "Quantas posições existem no jiu-jitsu?",
            options: ["3", "4", "5", "6"],
            correct: 1
        }
    ],
    medium: [
        {
            question: "Qual é a ordem correta das faixas no jiu-jitsu?",
            options: ["Branca, Azul, Roxa, Marrom, Preta", "Branca, Roxa, Azul, Marrom, Preta", "Branca, Amarela, Laranja, Verde, Azul, Roxa, Marrom, Preta", "Branca, Verde, Amarela, Laranja, Marrom, Preta"],
            correct: 0
        },
        {
            question: "Quantos pontos vale um knee on belly?",
            options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
            correct: 1
        },
        {
            question: "O que é 'positional control'?",
            options: ["Controle de posição e do adversário", "Uma sequência de golpes", "Um tipo de queda", "Uma defesa"],
            correct: 0
        },
        {
            question: "Qual é a posição de guard mais comum?",
            options: ["Closed guard", "Open guard", "Half guard", "De la Riva"],
            correct: 0
        },
        {
            question: "Quantos pontos você perde por ser colocado de costas?",
            options: ["Perde 1 ponto", "Perde 2 pontos", "Perde 3 pontos", "Não perde pontos"],
            correct: 3
        },
        {
            question: "O que significa 'mounted position'?",
            options: ["Estar de joelhos", "Estar sentado nas costas do adversário", "Estar sobre a barriga do adversário", "Estar de lado"],
            correct: 2
        },
        {
            question: "Qual é a submissão mais tradicional do jiu-jitsu?",
            options: ["Arm triangle", "Rear naked choke", "Armlock", "Ezequiel choke"],
            correct: 1
        },
        {
            question: "Quantos segundos dura uma pontuação de 'vantagem'?",
            options: ["Não existe mais vantagem", "Até o fim da luta", "30 segundos", "1 minuto"],
            correct: 0
        },
        {
            question: "O que é 'frame' no jiu-jitsu?",
            options: ["Um golpe", "Uma estrutura de defesa com os braços", "Uma posição de ataque", "Um tipo de armadura"],
            correct: 1
        },
        {
            question: "Qual é a faixa necessária para competir em campeonatos internacionais?",
            options: ["Azul", "Roxa", "Marrom", "Preta"],
            correct: 3
        }
    ],
    hard: [
        {
            question: "Qual é a diferença entre 'pressure pass' e 'speed pass'?",
            options: ["Um usa velocidade, outro usa pressão", "Um é ilegal", "Não existe diferença", "Um é usado em self-defense"],
            correct: 0
        },
        {
            question: "Em uma transição de guard para mount, quantos pontos você recebe?",
            options: ["Nenhum, pois é apenas posição", "2 pontos", "3 pontos", "4 pontos"],
            correct: 0
        },
        {
            question: "O que é 'lapel guard'?",
            options: ["Uma posição de lado control", "Um tipo de guard que usa a lapela do gi", "Uma submissão", "Uma queda"],
            correct: 1
        },
        {
            question: "Qual é o tempo mínimo de experiência para faixa preta?",
            options: ["5 anos", "7 anos", "10 anos", "12 anos"],
            correct: 2
        },
        {
            question: "O que significa 'voidado' em uma luta?",
            options: ["Desistência do atleta", "Vitória por pontuação", "Anulação de uma posição ou ação", "Empate"],
            correct: 2
        },
        {
            question: "Qual é a submissão mais rápida do jiu-jitsu?",
            options: ["Guillotine choke", "Arm triangle", "Straight ankle lock", "Samurai choke"],
            correct: 0
        },
        {
            question: "Em uma 'back take', quantos pontos você recebe imediatamente?",
            options: ["Nenhum", "2 pontos", "3 pontos", "4 pontos"],
            correct: 0
        },
        {
            question: "O que é 'De la Riva hook'?",
            options: ["Uma submissão", "Um tipo de pass", "Uma técnica de guard usando o pé no quadril", "Uma queda"],
            correct: 2
        },
        {
            question: "Qual é a federação de jiu-jitsu mais importante mundialmente?",
            options: ["IBJJF", "IJF", "ADCC", "GJJ"],
            correct: 0
        },
        {
            question: "O que é 'combat base'?",
            options: ["A posição inicial do combate", "Uma estrutura defensiva com as pernas abertas", "Uma técnica de ataque", "Um tipo de defesa"],
            correct: 1
        }
    ]
};

// State Variables
let currentDifficulty = null;
let currentQuestionIndex = 0;
let currentQuestions = [];
let userAnswers = [];
let selectedAnswer = null;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

// Initialize
function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestions = quizData[difficulty];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    selectedAnswer = null;

    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');

    displayQuestion();
}

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const questionCounter = document.getElementById('questionCounter');

    questionText.textContent = question.question;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;

    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);

        // Restore previously selected answer
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }

        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
    updateProgressBar();
}

function selectAnswer(index) {
    userAnswers[currentQuestionIndex] = index;
    selectedAnswer = index;

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        selectedAnswer = null;
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        selectedAnswer = null;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finalizar' : 'Próxima →';
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    // Calculate score
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuestions[index].correct) {
            correctAnswers++;
        }
    });

    const totalQuestions = currentQuestions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Display score
    document.getElementById('finalScore').textContent = correctAnswers;
    
    // Display message based on score
    const resultMessage = document.getElementById('resultMessage');
    if (percentage === 100) {
        resultMessage.textContent = '🏆 Perfeito! Você é um mestre em jiu-jitsu!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '🥇 Excelente! Você tem um conhecimento sólido!';
    } else if (percentage >= 60) {
        resultMessage.textContent = '👏 Bom trabalho! Continue estudando!';
    } else if (percentage >= 40) {
        resultMessage.textContent = '📚 Você precisa estudar mais sobre jiu-jitsu!';
    } else {
        resultMessage.textContent = '💪 Não desista! Volte a treinar e tente novamente!';
    }

    // Display detailed results
    const resultDetails = document.getElementById('resultDetails');
    resultDetails.innerHTML = `
        <div class="result-detail-item">
            <strong>Nível de Dificuldade:</strong> ${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)}
        </div>
        <div class="result-detail-item">
            <strong>Acertos:</strong> ${correctAnswers} de ${totalQuestions}
        </div>
        <div class="result-detail-item">
            <strong>Percentual:</strong> ${percentage.toFixed(1)}%
        </div>
    `;
}

function restartQuiz() {
    startScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    currentDifficulty = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedAnswer = null;
}

// Handle Enter key for navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !quizScreen.classList.contains('hidden')) {
        if (currentQuestionIndex === currentQuestions.length - 1) {
            showResults();
        } else {
            nextQuestion();
        }
    }
});
