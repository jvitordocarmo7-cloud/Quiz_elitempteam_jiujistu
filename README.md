# 🥋 Quiz Jiu-Jitsu Elite Team

Um site interativo de quiz sobre jiu-jitsu com diferentes níveis de dificuldade. Teste seu conhecimento sobre técnicas, terminologia e regras do jiu-jitsu!

## 🎯 Características

- **3 Níveis de Dificuldade**
  - Fácil: Perguntas básicas para iniciantes
  - Médio: Perguntas intermediárias para alunos regulares
  - Difícil: Perguntas avançadas para especialistas

- **10 Perguntas por Nível**
  - Múltipla escolha com 4 opções

- **Sistema de Pontuação**
  - Acompanhamento de progresso visual
  - Feedback detalhado sobre o desempenho
  - Mensagens motivacionais baseadas na pontuação

- **Interface Responsiva**
  - Design adaptável para celular, tablet e desktop
  - Tema profissional com cores de jiu-jitsu

- **Navegação Intuitiva**
  - Botões anteriores e próximos
  - Barra de progresso visual
  - Contador de perguntas

## 📁 Estrutura do Projeto

```
Quiz_elitempteam_jiujistu/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos CSS
├── script.js       # Lógica do quiz em JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/jvitordocarmo7-cloud/Quiz_elitempteam_jiujistu.git
   cd Quiz_elitempteam_jiujistu
   ```

2. **Abrir a página**
   - Abra o arquivo `index.html` em um navegador web
   - Ou acesse através do GitHub Pages (após ativar)

3. **Jogar**
   - Selecione um nível de dificuldade
   - Responda às 10 perguntas
   - Navegue entre as perguntas usando os botões
   - Veja seus resultados ao final

## 🎨 Personalização

### Adicionar Novas Perguntas

Edite o arquivo `script.js` e adicione novas perguntas no array `quizData`:

```javascript
{
    question: "Sua pergunta aqui?",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correct: 0  // Índice da resposta correta (0-3)
}
```

### Alterar Cores

Modifique as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #c41e3a;      /* Cor vermelha principal */
    --secondary-color: #1a1a1a;    /* Cor escura */
    --accent-color: #ffd700;       /* Cor de destaque */
}
```

## 📊 Estrutura das Perguntas

Cada pergunta contém:
- **question**: O texto da pergunta
- **options**: Array com 4 opções de resposta
- **correct**: Índice da resposta correta (0-3)

## 🌐 GitHub Pages

Para ativar o GitHub Pages:
1. Vá para Settings do repositório
2. Em Pages, selecione "Deploy from a branch"
3. Escolha a branch "main" e a pasta "root"
4. Salve as alterações
5. A página estará disponível em: `https://jvitordocarmo7-cloud.github.io/Quiz_elitempteam_jiujistu`

## 💡 Ideias de Melhorias

- [ ] Adicionar mais perguntas e níveis
- [ ] Sistema de ranking/pontuação
- [ ] Explicações detalhadas para cada resposta
- [ ] Imagens e vídeos das técnicas
- [ ] Cronômetro para o quiz
- [ ] Base de dados com respostas do usuário
- [ ] Modo multiplayer
- [ ] Certificado ao final do quiz

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests com:
- Novas perguntas
- Melhorias na interface
- Correções de bugs
- Sugestões de recursos

## 📝 Licença

Este projeto está sob licença [MIT](LICENSE).

## 👨‍🏫 Sobre o Elite Team Jiu-Jitsu

Este é um projeto desenvolvido para a comunidade de jiu-jitsu Elite Team!

---

**Desenvolvido com 🥋 e ❤️**

Boa sorte no quiz! 🏆
