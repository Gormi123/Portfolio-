// Array of quotes
const quotes = [
    "May the Force be with you. - Star Wars",
    "I'm the king of the world! - Titanic",
    "Why so serious? - The Dark Knight",
    "I'll be back. - The Terminator",
    "To infinity and beyond! - Toy Story"
];

// Function to display a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Initial quote on page load
generateQuote();

// Trivia quiz functionality

function checkAnswer(answer) {
    let correctAnswer = "prashant neel";
    if (answer === correctAnswer) {
        document.getElementById("trivia-result").innerText = "Correct! prashant neel directed kgf.";
    } else {
        document.getElementById("trivia-result").innerText = "Incorrect. Try again!";
    }
}

