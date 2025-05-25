const quotesByTime = {
  morning: [
    { text: "Begin with the end in mind.", author: "Stephen Covey" },
    {
      text: "Today's actions shape tomorrow's achievements.",
      author: "Anonymous",
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      text: "The beginning is the most important part of the work.",
      author: "Plato",
    },
    { text: "Every morning is a new arrival.", author: "Rumi" },
    {
      text: "When you arise in the morning, think of what a precious privilege it is to be alive.",
      author: "Marcus Aurelius",
    },
    { text: "The sun is new each day.", author: "Heraclitus" },
    {
      text: "An early-morning walk is a blessing for the whole day.",
      author: "Henry David Thoreau",
    },
    {
      text: "Opportunities are like sunrises; if you wait too long, you miss them.",
      author: "William Arthur Ward",
    },
    {
      text: "Morning without you is a dwindled dawn.",
      author: "Emily Dickinson",
    },
    {
      text: "Each morning we are born again. What we do today is what matters most.",
      author: "Buddha",
    },
    {
      text: "Rise up, start fresh, see the bright opportunity in each new day.",
      author: "Anonymous",
    },
    {
      text: "With the new day comes new strength and new thoughts.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Morning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.",
      author: "Glen Cook",
    },
    {
      text: "Lose an hour in the morning, and you will spend all day looking for it.",
      author: "Richard Whately",
    },
    {
      text: "The breeze at dawn has secrets to tell you. Don’t go back to sleep.",
      author: "Rumi",
    },
    {
      text: "Success comes to those who have the willpower to win over their snooze buttons.",
      author: "Anonymous",
    },
    {
      text: "Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.",
      author: "Yoko Ono",
    },
    {
      text: "Morning is an important time of day because how you spend your morning can often tell you what kind of day you are going to have.",
      author: "Lemony Snicket",
    },
    {
      text: "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.",
      author: "Carmelo Anthony",
    },
    {
      text: "First thing every morning before you arise, say out loud, ‘I believe,’ three times.",
      author: "Norman Vincent Peale",
    },
    {
      text: "Wake up with determination. Go to bed with satisfaction.",
      author: "Anonymous",
    },
    {
      text: "The morning was full of sunlight and hope.",
      author: "Kate Chopin",
    },
    {
      text: "There was never a night or a problem that could defeat sunrise or hope.",
      author: "Bernard Williams",
    },
    {
      text: "Every sunrise is an invitation to brighten someone's day.",
      author: "Richelle E. Goodrich",
    },
    {
      text: "The morning is a fresh start, a new beginning.",
      author: "Anonymous",
    },
  ],
  midday: [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Keep your eyes on the stars, and your feet on the ground.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Quality is not an act, it is a habit.",
      author: "Aristotle",
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
    },
    {
      text: "What you do today can improve all your tomorrows.",
      author: "Ralph Marston",
    },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    {
      text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats",
    },
    {
      text: "Action is the foundational key to all success.",
      author: "Pablo Picasso",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "Energy and persistence conquer all things.",
      author: "Benjamin Franklin",
    },
    {
      text: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh (Alice in Wonderland)",
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser",
    },
    {
      text: "Make each day your masterpiece.",
      author: "John Wooden",
    },
    {
      text: "Don't count the days, make the days count.",
      author: "Muhammad Ali",
    },
    {
      text: "Hard work beats talent when talent doesn’t work hard.",
      author: "Tim Notke",
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      text: "Go as far as you can see; when you get there, you’ll be able to see further.",
      author: "Thomas Carlyle",
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      text: "If you’re going through hell, keep going.",
      author: "Winston Churchill",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
  ],
  evening: [
    {
      text: "Reflect on your day, prepare for tomorrow.",
      author: "Anonymous",
    },
    {
      text: "Rest and recharge - tomorrow is a new opportunity.",
      author: "Anonymous",
    },
    {
      text: "Your mind will answer most questions if you learn to relax and wait for the answer.",
      author: "William S. Burroughs",
    },
    {
      text: "Take time to recharge and reset. Every sunset is an opportunity to reset.",
      author: "Richie Norton",
    },
    {
      text: "The darker the night, the brighter the stars.",
      author: "Fyodor Dostoevsky",
    },
    { text: "Good night, and good luck.", author: "Edward R. Murrow" },
    {
      text: "Night is the other half of life, and the better half.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "The evening sings in a voice of amber, the dawn is surely coming.",
      author: "Al Stewart",
    },
    {
      text: "Let us step into the night and pursue that flighty temptress, adventure.",
      author: "J.K. Rowling",
    },
    {
      text: "Each day provides its own gifts.",
      author: "Marcus Aurelius",
    },
    {
      text: "The best bridge between despair and hope is a good night’s sleep.",
      author: "E. Joseph Cossman",
    },
    {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo",
    },
    {
      text: "The night is the hardest time to be alive and 4am knows all my secrets.",
      author: "Poppy Z. Brite",
    },
    {
      text: "There is a time for many words, and there is also a time for sleep.",
      author: "Homer",
    },
    {
      text: "The moon is a friend for the lonesome to talk to.",
      author: "Carl Sandburg",
    },
    {
      text: "Sleep is the best meditation.",
      author: "Dalai Lama",
    },
    {
      text: "As the night gets dark, let your worries fade. Sleep peacefully knowing you've done all you can do for today.",
      author: "Anonymous",
    },
    {
      text: "The evening is a time of real experimentation. You never want to look the same way.",
      author: "Donna Karan",
    },
    {
      text: "The night brings advice and clarity.",
      author: "Anonymous",
    },
    {
      text: "Don't fight with the pillow, but lay down your head and kick every worriment out of the bed.",
      author: "Edmund Vance Cooke",
    },
    {
      text: "Stars can’t shine without darkness.",
      author: "D.H. Sidebottom",
    },
    {
      text: "Peace is seeing a sunset and knowing who to thank.",
      author: "Amit Ray",
    },
    {
      text: "A day is over, and it’s time to rest. Be kind to yourself.",
      author: "Anonymous",
    },
    {
      text: "Night is a world lit by itself.",
      author: "Antonio Porchia",
    },
    {
      text: "The night is more alive and more richly colored than the day.",
      author: "Vincent Van Gogh",
    },
  ],
};

const greetings = {
  morning: [
    "Begin with Purpose",
    "Rise and Create",
    "Morning Momentum",
    "Start with Intention",
    "Dawn of Possibility",
    "Fresh Beginnings",
    "Morning Mastery",
    "Purpose-Driven Dawn",
  ],
  afternoon: [
    "Midday Focus",
    "Afternoon Excellence",
    "Sustained Progress",
    "Steady Momentum",
    "Purposeful Action",
    "Focused Energy",
    "Afternoon Achievement",
    "Consistent Growth",
  ],
  evening: [
    "Evening Reflection",
    "Twilight Wisdom",
    "Day's End Purpose",
    "Reflective Hours",
    "Evening Excellence",
    "Sunset Success",
    "Closing with Intent",
    "Peaceful Progress",
  ],
};

// Update the subtitles object to include afternoon key (it was missing)
const subtitles = {
  morning: [
    "We're guests on Earth—make your stay unforgettable.",
    "Every moment is a fresh beginning.",
    "Create the day you want to live.",
    "Your potential awaits your permission.",
    "Small steps lead to big changes.",
    "Write your story with purpose.",
    "Today's choices shape tomorrow's reality.",
    "Begin with intention, end with satisfaction.",
  ],
  afternoon: [
    "Keep moving forward with purpose.",
    "Your journey continues with each step.",
    "Progress is built moment by moment.",
    "Stay focused on what matters most.",
    "Each hour holds new possibilities.",
    "Transform intentions into reality.",
    "Your dedication shapes your destiny.",
    "Build momentum with each action.",
  ],
  evening: [
    "Reflect on progress, envision tomorrow.",
    "Every ending sets up a new beginning.",
    "Your efforts today build tomorrow's success.",
    "Gather wisdom from today's journey.",
    "Let accomplishments fuel future growth.",
    "Tomorrow's victories start with today's efforts.",
    "Time well spent is never wasted.",
    "Prepare for tomorrow's opportunities.",
  ],
};

// State variables
let timerInterval;
let timerMinutes = 25;
let timerSeconds = 0;
let isTimerRunning = false;
let totalFocusTime = 0;
let completedSessions = 0;

// Theme management
// Theme management
function toggleTheme() {
  const body = document.body;
  const circle = document.getElementById("toggle-circle");

  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    circle.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "light");
    circle.textContent = "☀️";
  }
}

// Initialize the page
function init() {
  updateDateTime();
  setRandomQuote();
  updateGreeting();
  setupEventListeners();
  updateProgress();
  setThemeBasedOnTime();

  setInterval(() => {
    updateDateTime();
    setThemeBasedOnTime();
  }, 60000);
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("datetime").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

function setThemeBasedOnTime() {
  const hour = new Date().getHours();
  const body = document.body;
  const circle = document.getElementById("toggle-circle");

  if (hour >= 20 || hour < 6) {
    body.setAttribute("data-theme", "dark");
    circle.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "light");
    circle.textContent = "☀️";
  }
}

function getTimeBasedQuotes() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return quotesByTime.morning;
  } else if (hour < 18) {
    return quotesByTime.midday;
  } else {
    return quotesByTime.evening;
  }
}

function setRandomQuote() {
  const lastQuoteTime = localStorage.getItem("lastQuoteTime");
  const currentTime = new Date().getTime();
  const currentHour = new Date().getHours();
  const lastHour = localStorage.getItem("lastQuoteHour");

  if (
    !lastQuoteTime ||
    currentTime - parseInt(lastQuoteTime) > 3600000 ||
    currentHour.toString() !== lastHour
  ) {
    const timeBasedQuotes = getTimeBasedQuotes();
    const randomQuote =
      timeBasedQuotes[Math.floor(Math.random() * timeBasedQuotes.length)];

    document.getElementById("quote").textContent = `"${randomQuote.text}"`;
    document.getElementById(
      "quote-author"
    ).textContent = `— ${randomQuote.author}`;

    localStorage.setItem("lastQuoteTime", currentTime.toString());
    localStorage.setItem("lastQuoteHour", currentHour.toString());
    localStorage.setItem("currentQuote", JSON.stringify(randomQuote));
  } else {
    const storedQuote = JSON.parse(localStorage.getItem("currentQuote"));
    if (storedQuote) {
      document.getElementById("quote").textContent = `"${storedQuote.text}"`;
      document.getElementById(
        "quote-author"
      ).textContent = `— ${storedQuote.author}`;
    }
  }
}

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("greeting");
  const subtitleEl = document.querySelector(".greeting-subtitle");

  let timeOfDay;
  if (hour < 12) {
    timeOfDay = "morning";
  } else if (hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  const randomIndex = Math.floor(Math.random() * greetings[timeOfDay].length);
  const randomSubtitleIndex = Math.floor(
    Math.random() * subtitles[timeOfDay].length
  );

  greetingEl.textContent = greetings[timeOfDay][randomIndex];
  subtitleEl.textContent = subtitles[timeOfDay][randomSubtitleIndex];
}

function setupEventListeners() {
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  document
    .getElementById("todo-input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter" && this.value.trim()) {
        addTodo(this.value.trim());
        this.value = "";
      }
    });

  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("todo-checkbox")) {
      toggleTodo(e.target);
    }
  });
}

function addTodo(text) {
  const todoList = document.getElementById("todo-list");
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.innerHTML = `
                      <input type="checkbox" class="todo-checkbox">
                      <span class="todo-text">${text}</span>
                  `;
  todoList.appendChild(todoItem);
  updateProgress();
}

function toggleTodo(checkbox) {
  const todoText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    todoText.classList.add("completed");
  } else {
    todoText.classList.remove("completed");
  }
  updateProgress();
}

function updateProgress() {
  const checkboxes = document.querySelectorAll(".todo-checkbox");
  const completed = document.querySelectorAll(".todo-checkbox:checked").length;
  const total = checkboxes.length;

  document.getElementById(
    "task-progress"
  ).textContent = `${completed}/${total}`;
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  document.getElementById("progress-bar-fill").style.width = `${percentage}%`;
}

function getMotivationalMessage() {
  const hour = new Date().getHours();
  const completed = document.querySelectorAll(".todo-checkbox:checked").length;
  const total = document.querySelectorAll(".todo-checkbox").length;
  const completionRate = total > 0 ? completed / total : 0;

  if (completionRate === 1) {
    return "Outstanding! You've conquered today's intentions. Your focus is unstoppable! 🚀";
  } else if (completionRate >= 0.7) {
    return "Fantastic progress! You're in the flow zone. Keep this momentum going! ⚡";
  } else if (completionRate >= 0.5) {
    return "Great work so far! You're building solid momentum. Stay focused! 💪";
  } else if (hour < 12) {
    return "Good morning! Ready to turn intentions into achievements? Let's begin! ☀️";
  } else if (hour < 17) {
    return "Afternoon focus time! Each small step forward builds your success. 🎯";
  } else {
    return "Evening reflection: What will you accomplish to end the day strong? 🌙";
  }
}

function updateMotivationalMessage() {
  const progressText = document.querySelector(".progress-text");
  if (progressText) {
    progressText.textContent = getMotivationalMessage();
  }
}

function enhancedInit() {
  init();
  updateMotivationalMessage();

  const observer = new MutationObserver(updateMotivationalMessage);
  observer.observe(document.getElementById("todo-list"), {
    childList: true,
    subtree: true,
    attributes: true,
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

document.addEventListener("DOMContentLoaded", enhancedInit);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    console.log("Focus Hub loaded successfully! 🎯");
  });
}
