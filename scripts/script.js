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
    {
      text: "Every dawn is a fresh canvas… paint it with your brightest colors.",
      author: "Anonymous",
    },
    {
      text: "Let this morning be a new chapter in your life, filled with light and laughter.",
      author: "Oprah Winfrey",
    },
    {
      text: "I like my coffee black and my mornings bright.",
      author: "Terri Guillemets",
    },
    {
      text: "The secret to getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      text: "Morning is when I am awake and there is a dawn in me.",
      author: "Henry David Thoreau",
    },
    {
      text: "Your journey will awaken you to new horizons and new mornings.",
      author: "Maya Angelou",
    },
    {
      text: "Each day is a little life: every waking and rising a little birth.",
      author: "Arthur Schopenhauer",
    },
    {
      text: "Lose an hour in the morning, and you’ll be all day hunting for it.",
      author: "Famous Proverb",
    },
    {
      text: "In the midst of chaos, there is also opportunity.",
      author: "Sun Tzu",
    },
    {
      text: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
      author: "Sun Tzu",
    },
    {
      text: "Plan for what is difficult while it is easy, do what is great while it is small.",
      author: "Sun Tzu",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The man who moves a mountain begins by carrying away small stones.",
      author: "Confucius",
    },
    {
      text: "When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.",
      author: "Confucius",
    },
    {
      text: "I get up every morning, and it’s going to be a great day. You never know when it’s going to be over so I refuse to have a bad day.",
      author: "Paul Henderson",
    },
    {
      text: "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.",
      author: "Marcus Aurelius",
    },
    {
      text: "Some people dream of success, while other people get up every morning and make it happen.",
      author: "Wayne Huizenga",
    },
    {
      text: "Write it on your heart that every day is the best day in the year.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The day will be what you make it, so rise, like the sun, and burn.",
      author: "William C. Hannan",
    },
    {
      text: "There was never a night or a problem that could defeat sunrise or hope.",
      author: "Bernard Williams",
    },
    {
      text: "Every morning starts a new page in your story. Make it a great one today.",
      author: "Doe Zantamata",
    },
    {
      text: "The breeze at dawn has secrets to tell you. Don't go back to sleep.",
      author: "Rumi",
    },
    {
      text: "Just one small positive thought in the morning can change your whole day.",
      author: "Dalai Lama",
    },
    {
      text: "Let me wake up next to you, have coffee in the morning and wander through the city with your hand in mine, and I'll be happy for the rest of my little life.",
      author: "Charlotte Eriksson",
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
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      text: "Procrastination is the thief of time.",
      author: "Edward Young",
    },
    {
      text: "You don’t have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      text: "Don’t let what you cannot do interfere with what you can do.",
      author: "John Wooden",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "You don’t need a new day to start over, you only need a new mindset.",
      author: "Anonymous",
    },
    {
      text: "A journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
    {
      text: "Focus on the step in front of you, not the whole staircase.",
      author: "Anonymous",
    },
    {
      text: "Procrastination makes easy things hard and hard things harder.",
      author: "Mason Cooley",
    },
    {
      text: "The difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson",
    },
    {
      text: "Don’t wait for the perfect moment. Take the moment and make it perfect.",
      author: "Anonymous",
    },
    {
      text: "Small deeds done are better than great deeds planned.",
      author: "Peter Marshall",
    },
    {
      text: "The only thing standing between you and your goal is the story you keep telling yourself.",
      author: "Jordan Belfort",
    },
    {
      text: "Every accomplishment starts with the decision to try.",
      author: "John F. Kennedy",
    },
    {
      text: "Don’t let perfectionism become an excuse for never getting started.",
      author: "Marilu Henner",
    },
    {
      text: "The man who moves a mountain begins by carrying away small stones.",
      author: "Confucius",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      text: "The harder you work for something, the greater you’ll feel when you achieve it.",
      author: "Anonymous",
    },
    {
      text: "Don’t stop when you’re tired. Stop when you’re done.",
      author: "Anonymous",
    },
    {
      text: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
      author: "George Bernard Shaw",
    },
    {
      text: "The time will pass anyway; you can either spend it creating the life you want or spend it living the life you don’t want.",
      author: "Anonymous",
    },
    {
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collier",
    },
    {
      text: "The wise warrior avoids the battle he cannot win.",
      author: "Sun Tzu",
    },
    {
      text: "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
      author: "Sun Tzu",
    },
    {
      text: "Ponder and deliberate before you make a move.",
      author: "Sun Tzu",
    },
    {
      text: "Success depends upon previous preparation, and without such preparation there is sure to be failure.",
      author: "Confucius",
    },
    {
      text: "To see what is right and not do it is the want of courage.",
      author: "Confucius",
    },
    {
      text: "The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools.",
      author: "Confucius",
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
    {
      text: "How beautiful the night can be when the soul is at peace.",
      author: "Jean Paul",
    },
    {
      text: "There was never a night or a problem that could defeat sunrise or hope.",
      author: "Bernard Williams",
    },
    {
      text: "Night is a time of rigor, but also of mercy. There are truths which one can see only when it’s dark.",
      author: "Isaac Bashevis Singer",
    },
    {
      text: "I like the night. Without the dark, we'd never see the stars.",
      author: "Stephenie Meyer",
    },
    {
      text: "The night hides a world, but reveals a universe.",
      author: "Terri Guillemets",
    },
    {
      text: "The night is the pause of shadow and silence before the music of morning.",
      author: "Rabindranath Tagore",
    },
    {
      text: "I often think that the night is more alive and more richly colored than the day.",
      author: "Vincent van Gogh",
    },
    {
      text: "At night, you can truly hear yourself. Listen closely.",
      author: "Kobe Bryant",
    },
    {
      text: "In the darkness, you find clarity. In stillness, strength.",
      author: "Brene Brown",
    },
    {
      text: "We need the dark to see the stars. We need the quiet to find our thoughts.",
      author: "Simon Van Booy",
    },
    {
      text: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
      author: "Sun Tzu",
    },
    {
      text: "Opportunities multiply as they are seized.",
      author: "Sun Tzu",
    },
    {
      text: "Know yourself and you will win all battles.",
      author: "Sun Tzu",
    },
    {
      text: "By three methods we may learn wisdom: First, by reflection, which is noblest; second, by imitation, which is easiest; and third by experience, which is the bitterest.",
      author: "Confucius",
    },
    {
      text: "He who learns but does not think, is lost. He who thinks but does not learn is in great danger.",
      author: "Confucius",
    },
    {
      text: "When we see men of a contrary character, we should turn inwards and examine ourselves.",
      author: "Confucius",
    },
    {
      text: "Look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist.",
      author: "Stephen Hawking",
    },
    {
      text: "Even through your hardest nights, the universe keeps growing. So will you.",
      author: "Anonymous",
    },
    {
      text: "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
      author: "Harvey Dent (The Dark Knight)",
    },
    {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo",
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
    "Awaken Your Potential",
    "Golden Hour Goals",
    "Inspired Awakening",
    "New Light, New Drive",
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
    "Drive the Day Forward",
    "Midday Motivation",
    "Power Through the Pause",
    "Keep the Vision Alive",
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
    "Nightfall Clarity",
    "Rest with Purpose",
    "Gentle Reset",
    "Harvest the Day",
  ],
};

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
    "Fuel the day with purpose and passion.",
    "Let the sunrise spark your ambition.",
    "You are the author of today’s chapter.",
    "Set the tone for a meaningful day.",
    "Morning is a canvas; paint it with your dreams.",
    "Awaken your dreams with action.",
    "The morning is a fresh start; embrace it fully.",
    "Every sunrise is a new opportunity to shine.",
    "Morning is the time to set your intentions.",
    "Let the morning light guide your path.",
    "Embrace the morning with gratitude and purpose.",
    "Morning is a reminder that you can start anew.",
    "The morning is a gift; unwrap it with joy.",
    "Every day is the best day in the year",
    "You got through yesterday, you can get through today.",
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
    "Harness the energy of now.",
    "Push through — you’re building something lasting.",
    "This moment is part of your legacy.",
    "Stay the course. Greatness is made in the middle.",
    "Midday is a chance to refocus and recharge.",
    "Let the afternoon be a time of action and achievement.",
    "Every afternoon is a new opportunity to excel.",
    "Harness the power of the afternoon sun to fuel your ambitions.",
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
    "Unwind with purpose, not regret.",
    "The calm reveals how far you’ve come.",
    "Let the night restore your strength.",
    "Rest is a powerful part of progress.",
    "Reflect, recharge, and rise again.",
    "Evenings are for reflection and renewal.",
    "As the day ends, let your dreams begin.",
    "Close the day with gratitude and grace.",
    "Tomorrow is a new canvas; today is the brush.",
    "Let the evening be a time of peace and preparation.",
    "In the quiet of the night, find your strength.",
    "The stars remind us that even in darkness, there is light.",
    "As the sun sets, let your worries fade.",
    "Evenings are for dreaming and planning.",
    "Rest well, for tomorrow holds new adventures.",
    "The night is a time for reflection and renewal.",
    "Let the evening calm your mind and inspire your dreams.",
    "As the day closes, let your heart be light.",
    "In the stillness of the night, find your clarity.",
    "The evening is a time to gather your thoughts and dreams.",
    "As the stars appear, so do new possibilities.",
    "Let the night be a time of peace and preparation.",
    "Evenings are for dreaming and planning.",
    "Rest well, for tomorrow holds new adventures.",
    "The night is a time for reflection and renewal.",
    "Let the evening calm your mind and inspire your dreams.",
    "A strong mind needs a strong body, and a strong body needs rest.",
    "As the day winds down, let your spirit rise.",
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

// Storage management functions
function getStoredItems(key) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : { recent: [], cycleCount: {} };
}

function updateStoredItems(key, item) {
  const stored = getStoredItems(key);

  // Add new item to recent list
  stored.recent.push(item);

  // Initialize or increment cycle count for this item
  stored.cycleCount[item] = (stored.cycleCount[item] || 0) + 1;

  // Keep only the last 10 items to prevent storage bloat
  if (stored.recent.length > 10) {
    const removed = stored.recent.shift();
    // Decrement cycle count when item falls off recent list
    if (stored.cycleCount[removed] > 0) {
      stored.cycleCount[removed]--;
    }
  }

  localStorage.setItem(key, JSON.stringify(stored));
}

function isItemAvailable(key, item) {
  const stored = getStoredItems(key);
  // Item is available if it hasn't been shown in the last 10 cycles
  return !stored.recent.includes(item) || stored.cycleCount[item] < 10;
}

function getRandomAvailableItem(items, storageKey) {
  // Filter out recently used items
  const availableItems = items.filter((item) =>
    isItemAvailable(storageKey, JSON.stringify(item))
  );

  // If all items have been used recently, reset the recent list for this category
  if (availableItems.length === 0) {
    localStorage.removeItem(storageKey);
    return items[Math.floor(Math.random() * items.length)];
  }

  return availableItems[Math.floor(Math.random() * availableItems.length)];
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
    const randomQuote = getRandomAvailableItem(
      timeBasedQuotes,
      "displayedQuotes"
    );

    document.getElementById("quote").textContent = `"${randomQuote.text}"`;
    document.getElementById(
      "quote-author"
    ).textContent = `— ${randomQuote.author}`;

    localStorage.setItem("lastQuoteTime", currentTime.toString());
    localStorage.setItem("lastQuoteHour", currentHour.toString());
    updateStoredItems("displayedQuotes", JSON.stringify(randomQuote));
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

  // Get random greeting that hasn't been shown recently
  const randomGreeting = getRandomAvailableItem(
    greetings[timeOfDay],
    "displayedGreetings"
  );
  const randomSubtitle = getRandomAvailableItem(
    subtitles[timeOfDay],
    "displayedSubtitles"
  );

  greetingEl.textContent = randomGreeting;
  subtitleEl.textContent = randomSubtitle;

  // Update storage
  updateStoredItems("displayedGreetings", randomGreeting);
  updateStoredItems("displayedSubtitles", randomSubtitle);
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
    console.log("Zen* loaded successfully! 🎯");
  });
}
