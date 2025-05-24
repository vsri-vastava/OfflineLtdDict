// Friendly dictionary dataset
const dictionary = {
  javascript: {
    definition: "A powerful scripting language used to make websites interactive.",
    tip: "🧠 Pro Tip: You can use JavaScript to create games, apps, and dynamic web content!"
  },
  html: {
    definition: "The standard language used to create web pages.",
    tip: "📄 HTML is like the skeleton of a website."
  },
  css: {
    definition: "A styling language used to make web pages beautiful.",
    tip: "🎨 With CSS, you control colors, fonts, layout and more!"
  },
  algorithm: {
    definition: "A set of steps used to solve a problem.",
    tip: "📊 Algorithms are the brain of computer logic."
  },
  function: {
    definition: "A block of reusable code that performs a specific task.",
    tip: "🔁 Functions help keep your code clean and organized!"
  }
};

// Capitalize first letter of word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Search function
function searchWord() {
  const inputBox = document.getElementById("wordInput");
  const word = inputBox.value.toLowerCase().trim();
  const display = document.getElementById("definitionResult");

  if (dictionary[word]) {
    const { definition, tip } = dictionary[word];
    display.innerHTML = `
      <h3>📖 ${capitalize(word)}</h3>
      <p><strong>Meaning:</strong> ${definition}</p>
      <p style="color: #2ecc71;">${tip}</p>
    `;
  } else if (word === "") {
    display.innerHTML = `<p>⚠️ Please type a word to search its meaning.</p>`;
  } else {
    display.innerHTML = `
      <p>❌ Sorry, we couldn't find the meaning of "<strong>${capitalize(word)}</strong>".</p>
      <p>Try another common word like <em>HTML</em>, <em>JavaScript</em>, or <em>Algorithm</em>.</p>
    `;
  }

  inputBox.value = ""; // Clear the input
}
