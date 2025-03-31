

# Hangman Game

A simple and interactive Hangman game built with **React** and **TypeScript**. This project is perfect for beginners looking to strengthen their skills in React, TypeScript, and component-based development.

## Features

- Random word generation from a predefined list of words.
- Interactive keyboard for guessing letters.
- Visual representation of the Hangman drawing that updates with incorrect guesses.
- Tracks guessed letters and dynamically updates the displayed word.
- Responsive design with a grid-based keyboard layout.

---

## Demo

![njewrjvbk](https://github.com/user-attachments/assets/5aaaf19b-13dc-48fb-a1c4-6ebcd88b60c2)

---

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/WebDevSimplified/react-hangman.git
   cd react-hangman
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Project Structure

```plaintext
react-hangman/
├── public/             # Static assets
├── src/
│   ├── components/     # React components (e.g., HangmanDrawing, Keyboard)
│   ├── App.tsx         # Main application entry point
│   ├── index.tsx       # Application bootstrap file
│   └── styles/         # CSS modules for styling
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## How to Play

1. The game generates a random word for you to guess.
2. Use the on-screen keyboard or your physical keyboard to guess letters.
3. Correct guesses reveal the letters in the word.
4. Incorrect guesses add parts to the Hangman drawing.
5. Win by guessing all letters before completing the Hangman drawing.

---

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Typed JavaScript for better code quality.
- **Vite**: Fast development server and build tool.
- **CSS Modules**: Scoped styling for components.

---

## Customization

You can customize the game by modifying:

1. **Word List**:
   Update `wordList.json` with your own set of words.

2. **Styling**:
   Modify styles in `keyboard.module.css` or other CSS files.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.





