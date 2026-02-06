# 🧠 Jogo de memória - React

[Versão em Português](#-versão-em-português) | [English Version](#-english-version)

---

## 🇧🇷 Versão em Português

Este é um jogo de memória interativo desenvolvido como parte do currículo de React. O desafio principal foi gerenciar estados dinâmicos e integrar a aplicação com uma API externa para buscar dados em tempo real.

### Visualização ao vivo 👉 [CLIQUE AQUI](https://nascimentomatheus1.github.io/memory-card-game/) 

### 🚀 Tecnologias Utilizadas
- **React.js** (Hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **Fetch API** (Consumo de dados externos)
- **CSS3** (Layout responsivo e animações)
- **Vite** (Ferramenta de Build)

### 🕹️ Como o Jogo Funciona
O objetivo é simples, mas desafiador: clique em uma carta, mas **nunca clique na mesma carta duas vezes!**
- A cada clique, as cartas são embaralhadas aleatoriamente.
- O jogo conta a pontuação atual e mantém um registro da sua **Melhor Pontuação (Best Score)**.
- Se você clicar em uma carta repetida, a pontuação atual é resetada.

### 🧠 Conceitos Aplicados
- **Consumo de API:** Implementação de chamadas assíncronas dentro do `useEffect` para buscar imagens e dados (ex: Pokémon API / Giphy).
- **Lógica de Algoritmos:** Implementação do algoritmo de embaralhamento (Shuffle) para garantir aleatoriedade a cada interação.
- **Persistência de Estado:** Gerenciamento da pontuação máxima comparando o estado atual com o recorde anterior.

---

## 🇺🇸 English Version

# 🧠 Memory Card Game - React Project

This is an interactive memory game developed as part of the React curriculum. The main challenge was to manage dynamic states and integrate the application with an external API to fetch real-time data.

### Live preview 👉 [CLICK HERE](https://nascimentomatheus1.github.io/memory-card-game/) 

### 🚀 Technologies Used
- **React.js** (Hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **Fetch API** (External data fetching)
- **CSS3** (Responsive layout and animations)
- **Vite** (Build Tool)

### 🕹️ How the Game Works
The goal is simple but challenging: click on a card, but **never click the same card twice!**
- After every click, the cards are randomly shuffled.
- The game tracks your current score and maintains a **Best Score** record.
- If you click a card you've already selected, your current score resets.

### 🧠 Key Concepts Applied
- **API Integration:** Implementing asynchronous calls within `useEffect` to fetch images and data from external sources.
- **Algorithm Logic:** Implementing a shuffle algorithm to ensure randomness upon every user interaction.
- **State Persistence:** Managing the high score by comparing the current session's state with the previous best score.
