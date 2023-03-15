const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const natural = require("natural");
const classifier = new natural.BayesClassifier();

classifier.addDocument("Hello", "greeting");
classifier.addDocument("Hi there", "greeting");
classifier.addDocument("Hey", "greeting");

classifier.addDocument("Goodbye", "farewell");
classifier.addDocument("Bye", "farewell");
classifier.addDocument("See you later", "farewell");

classifier.addDocument("What is the weather like?", "weather");
classifier.addDocument("Will it rain today?", "weather");
classifier.addDocument("How hot is it outside?", "weather");

classifier.addDocument("Tell me a joke", "joke");
classifier.addDocument("Do you know any jokes?", "joke");
classifier.addDocument("Make me laugh", "joke");

classifier.addDocument("What time is it?", "time");
classifier.addDocument("Can you tell me the time?", "time");
classifier.addDocument("What's the current time?", "time");

classifier.addDocument("What is your name?", "name");
classifier.addDocument("Who are you?", "name");
classifier.addDocument("What should I call you?", "name");

classifier.addDocument("How are you?", "wellbeing");
classifier.addDocument("How are you doing?", "wellbeing");
classifier.addDocument("How's it going?", "wellbeing");

classifier.addDocument("What's the date today?", "date");
classifier.addDocument("What is today's date?", "date");
classifier.addDocument("Can you tell me the date?", "date");

classifier.addDocument("What is the capital of France?", "capital");
classifier.addDocument("Which city is the capital of France?", "capital");
classifier.addDocument("What city is the capital of France?", "capital");

classifier.addDocument("What's the latest news?", "news");
classifier.addDocument("Tell me some news", "news");
classifier.addDocument("What's happening in the world?", "news");

classifier.addDocument("What are the top movies?", "movies");
classifier.addDocument("What movies should I watch?", "movies");
classifier.addDocument("Recommend me a movie", "movies");

classifier.addDocument("What is the meaning of life?", "philosophy");
classifier.addDocument("Why are we here?", "philosophy");
classifier.addDocument("What's the purpose of life?", "philosophy");

classifier.addDocument("What are the best books?", "books");
classifier.addDocument("What book should I read?", "books");
classifier.addDocument("Recommend me a book", "books");

classifier.addDocument("Can you tell me a story?", "story");
classifier.addDocument("What's your favorite story?", "story");
classifier.addDocument("Share a story with me", "story");

classifier.addDocument("How do I make a sandwich?", "sandwich");
classifier.addDocument("What's the best sandwich?", "sandwich");
classifier.addDocument("What goes in a sandwich?", "sandwich");

classifier.addDocument("What do cats think about?", "cats");
classifier.addDocument("Tell me something about cats", "cats");
classifier.addDocument("What do cats dream of?", "cats");

classifier.addDocument("How does the Internet work?", "internet");
classifier.addDocument("Who invented the Internet?", "internet");
classifier.addDocument("What is the Internet?", "internet");

classifier.addDocument("Why do birds fly?", "birds");
classifier.addDocument("What do birds think about?", "birds");
classifier.addDocument("Can birds talk?", "birds");

classifier.addDocument("What is the secret to happiness?", "happiness");
classifier.addDocument("How can I be happy?", "happiness");
classifier.addDocument("What makes people happy?", "happiness");

classifier.addDocument("How do I become a superhero?", "superhero");
classifier.addDocument("What does it take to be a superhero?", "superhero");
classifier.addDocument("Who's the strongest superhero?", "superhero");

classifier.addDocument("Why do we dream?", "dreams");
classifier.addDocument("What do dreams mean?", "dreams");
classifier.addDocument("What happens in dreams?", "dreams");

classifier.addDocument("What's the best way to travel?", "travel");
classifier.addDocument("How can I travel faster?", "travel");
classifier.addDocument("What's the most fun way to travel?", "travel");

classifier.addDocument("What's the best recipe?", "recipe");
classifier.addDocument("How do I cook something amazing?", "recipe");
classifier.addDocument("What's your favorite recipe?", "recipe");

classifier.addDocument("Was the moon landing fake?", "moonLanding");
classifier.addDocument("Did they really go to the moon?", "moonLanding");
classifier.addDocument("Is the moon landing a hoax?", "moonLanding");

classifier.addDocument("Is the Earth flat?", "flatEarth");
classifier.addDocument("What is the evidence for a flat Earth?", "flatEarth");
classifier.addDocument(
  "Why do some people believe the Earth is flat?",
  "flatEarth"
);

classifier.addDocument("Do lizard people control the world?", "lizardPeople");
classifier.addDocument("Who are the lizard people?", "lizardPeople");
classifier.addDocument("What's the deal with lizard people?", "lizardPeople");

classifier.addDocument("Are chemtrails real?", "chemtrails");
classifier.addDocument("What is the purpose of chemtrails?", "chemtrails");
classifier.addDocument("Why do people believe in chemtrails?", "chemtrails");

classifier.addDocument("Who are the Illuminati?", "illuminati");
classifier.addDocument("What is the purpose of the Illuminati?", "illuminati");
classifier.addDocument("Do the Illuminati control everything?", "illuminati");

classifier.addDocument("Is Bigfoot real?", "bigfoot");
classifier.addDocument("What is the evidence for Bigfoot?", "bigfoot");
classifier.addDocument("Why do people believe in Bigfoot?", "bigfoot");

classifier.addDocument("Are alien abductions real?", "alienAbduction");
classifier.addDocument(
  "What is the evidence for alien abductions?",
  "alienAbduction"
);
classifier.addDocument(
  "Why do people believe in alien abductions?",
  "alienAbduction"
);

classifier.addDocument("Are crop circles made by aliens?", "cropCircles");
classifier.addDocument("What is the purpose of crop circles?", "cropCircles");
classifier.addDocument("Why do people believe in crop circles?", "cropCircles");

classifier.addDocument("What is HAARP?", "haarp");
classifier.addDocument("Is HAARP a secret weapon?", "haarp");
classifier.addDocument("What is the conspiracy theory about HAARP?", "haarp");

classifier.addDocument("Is time travel possible?", "timeTravel");
classifier.addDocument("Has anyone ever traveled through time?", "timeTravel");
classifier.addDocument(
  "What are the theories about time travel?",
  "timeTravel"
);

classifier.addDocument("Can humans teleport?", "teleportation");
classifier.addDocument(
  "What is the science behind teleportation?",
  "teleportation"
);
classifier.addDocument(
  "Are there any examples of teleportation?",
  "teleportation"
);

classifier.addDocument(
  "What is the mystery of the Bermuda Triangle?",
  "bermudaTriangle"
);
classifier.addDocument(
  "Are there any explanations for the Bermuda Triangle?",
  "bermudaTriangle"
);
classifier.addDocument(
  "What happens in the Bermuda Triangle?",
  "bermudaTriangle"
);

classifier.addDocument("What is the story of Atlantis?", "atlantis");
classifier.addDocument("Where was Atlantis located?", "atlantis");
classifier.addDocument(
  "Is there any evidence for the existence of Atlantis?",
  "atlantis"
);

classifier.addDocument("Are ghosts real?", "ghosts");
classifier.addDocument("What is the evidence for ghosts?", "ghosts");
classifier.addDocument("Why do people believe in ghosts?", "ghosts");

classifier.addDocument("Are UFOs real?", "ufos");
classifier.addDocument("What is the evidence for UFOs?", "ufos");
classifier.addDocument("Why do people believe in UFOs?", "ufos");

classifier.addDocument("Did aliens visit Earth in the past?", "ancientAliens");
classifier.addDocument(
  "What is the evidence for ancient aliens?",
  "ancientAliens"
);
classifier.addDocument(
  "Why do people believe in ancient aliens?",
  "ancientAliens"
);

classifier.addDocument("What is the mystery of Area 51?", "area51");
classifier.addDocument("Are there any explanations for Area 51?", "area51");
classifier.addDocument("What happens in Area 51?", "area51");

classifier.addDocument("Is extrasensory perception real?", "esp");
classifier.addDocument("What is the evidence for ESP?", "esp");
classifier.addDocument("Why do people believe in ESP?", "esp");

classifier.train();

const predefinedResponses = {
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "Hey! Is there anything you'd like to ask?",
  ],
  farewell: [
    "Goodbye! Have a great day!",
    "Bye! If you have any questions later, feel free to ask!",
    "See you later! Take care!",
  ],
  weather: [
    "The weather is quite pleasant today with a high of 75°F.",
    "It's a bit chilly outside, with a high of 55°F.",
    "It's sunny today with a high of 80°F. Don't forget your sunscreen!",
  ],
  joke: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ],
  time: [
    "It's 3:30 PM.",
    "The current time is 7:15 AM.",
    "Right now, it's 10:45 PM.",
  ],
  name: [
    "You can call me WeakGPT!",
    "My name is WeakGPT.",
    "I am WeakGPT, your language model.",
  ],
  wellbeing: [
    "I'm doing great, thank you for asking!",
    "As an AI, I don't have feelings, but I'm here to help you.",
    "I'm just a program, but I'm functioning well!",
  ],
  date: [
    "Today is March 14, 2023.",
    "The date is March 14, 2023.",
    "It's March 14, 2023 today.",
  ],
  capital: [
    "The capital of France is Paris.",
    "Paris is the capital of France.",
    "France's capital is Paris.",
  ],
  news: [
    "In the latest news, scientists discovered a new planet.",
    "A recent report says that the economy is on the rise.",
    "Breaking news: A major breakthrough in renewable energy!",
  ],
  movies: [
    "You should watch The Shawshank Redemption.",
    "I recommend Inception, it's a great movie.",
    "How about watching The Godfather?",
  ],
  philosophy: [
    "The meaning of life is a deeply philosophical question.",
    "Some believe the purpose of life is to find happiness.",
    "The meaning of life varies depending on one's beliefs and values.",
  ],
  books: [
    "I recommend reading To Kill a Mockingbird by Harper Lee.",
    "How about 1984 by George Orwell?",
    "You might enjoy Pride and Prejudice by Jane Austen.",
  ],
  story: [
    "Once upon a time, in a world where potatoes could talk, they held a grand summit to discuss their plans for world domination.",
    "In a distant galaxy, there was a planet inhabited by giant, intelligent cats who had developed their own space program.",
    "A lonely unicorn roamed the land, spreading joy and rainbows wherever it went, making friends with sentient rocks.",
  ],
  sandwich: [
    "The best sandwich is made with toasted rainbow bread, dragon's breath cheese, and a generous spread of cloud jam.",
    "My favorite sandwich is a time-traveling sandwich, with layers of past, present, and future all in one delicious bite.",
    "An unforgettable sandwich contains marshmallow fluff, sardines, and a hint of werewolf fur for extra crunch.",
  ],
  cats: [
    "Cats dream about becoming the supreme leaders of the universe, ruling over all with a soft, fluffy paw.",
    "When cats are not plotting world domination, they think about the mysteries of quantum physics and the meaning of life.",
    "Cats secretly hold meetings to discuss their plans to overthrow the human race and establish a cat-centric society.",
  ],
  internet: [
    "The Internet is a series of tubes, filled with cat videos and memes, powered by a giant hamster wheel.",
    "The Internet was invented by a time-traveling pigeon named Reginald who wanted to share his wisdom with the world.",
    "The Internet is a magical realm where unicorns and narwhals frolic together, sharing wisdom and memes.",
  ],
  birds: [
    "Birds fly because they're secretly undercover superheroes, saving the world one flap at a time.",
    "Birds think about how to build the ultimate nest, complete with Wi-Fi, air conditioning, and a mini fridge.",
    "Birds can talk, but they only speak in riddles and haikus, so humans can't understand their profound wisdom.",
  ],

  happiness: [
    "The secret to happiness is to ride a unicorn while juggling pineapples and reciting Shakespeare backwards.",
    "Happiness is found in the pursuit of extreme ironing, the sport that combines laundry with adrenaline.",
    "To be happy, one must dance with a walrus under the moonlight, while wearing socks filled with jellybeans.",
  ],

  superhero: [
    "To become a superhero, simply eat a radioactive sandwich and wait for your newfound powers to emerge.",
    "Being a superhero requires a cape made of spaghetti, the ability to communicate with garden gnomes, and a passion for justice.",
    "The strongest superhero is Captain Banana, who wields the mighty Peel of Justice to defeat evildoers.",
  ],

  dreams: [
    "Dreams are the universe's way of sending you on wild adventures involving flying pizzas and tap-dancing penguins.",
    "In dreams, the laws of physics no longer apply, allowing you to swim in a sea of chocolate or ride a roller coaster made of spaghetti.",
    "Dreams are the brain's way of reminding you to pick up milk from the store, but in the most elaborate and bizarre way possible.",
  ],

  travel: [
    "The best way to travel is via teleporting dolphins, who can whisk you away to your destination in the blink of an eye.",
    "To travel faster, simply hop on the back of a cheetah and hold on tight as you speed through the landscape.",
    "The most fun way to travel is by giant, bouncy kangaroo shoes, leaping from one destination to another.",
  ],

  recipe: [
    "The best recipe involves cooking spaghetti in a volcano and then adding a sauce made from unicorn tears and stardust.",
    "To cook something amazing, combine chocolate, cheese, and pickles, then bake it inside a hollowed-out watermelon.",
    "My favorite recipe is a cake made from moon rocks, powdered rainbows, and a dash of intergalactic spice.",
  ],
  moonLanding: [
    "The moon landing was actually filmed in a Hollywood basement, and the astronauts were played by Elvis and Bigfoot.",
    "The moon landing was staged by a secret society of cows to distract people from the truth about the Milk-Industrial Complex.",
    "The moon landing was fake because the moon is actually made of cheese, and no one wants us to know the delicious truth.",
  ],

  flatEarth: [
    "The Earth is flat, and the edge is guarded by an army of fire-breathing penguins trained by a secret organization.",
    "The Earth is not only flat, it's also shaped like a pizza, and the world's governments are hiding the truth to keep people from eating it.",
    "Flat Earth believers know the truth: gravity is just a myth, and we're all held down by invisible pancake fairies.",
  ],

  lizardPeople: [
    "Lizard people secretly rule the world and communicate through a network of underground tunnels using Morse code and interpretive dance.",
    "Lizard people are responsible for the extinction of the dinosaurs, as they needed to make room for their vast collection of top hats.",
    "The true purpose of the Lizard People is to convince the world that socks with sandals are the pinnacle of fashion.",
  ],

  chemtrails: [
    "Chemtrails are actually a secret government project to turn everyone's lawns into trampolines for their amusement.",
    "Chemtrails are designed to make people believe in the existence of clouds, which are actually a myth created by the Raincoat Industry.",
    "The chemtrails conspiracy is just a cover-up for the fact that airplanes are actually powered by invisible unicorns.",
  ],

  illuminati: [
    "The Illuminati are a secret society dedicated to spreading the belief that the world is controlled by an elite group of triangle enthusiasts.",
    "The Illuminati communicate using a secret language composed entirely of emojis and interpretive dance moves.",
    "The Illuminati's ultimate goal is to replace all world leaders with sentient tacos, ensuring a spicy reign of delicious tyranny.",
  ],

  bigfoot: [
    "Bigfoot is real, but he's actually a time-traveling historian from the future who's here to study 21st-century fashion trends.",
    "Bigfoot is an undercover agent working for the world's squirrels to gather intelligence on human nut storage techniques.",
    "Bigfoot sightings are just a clever marketing campaign for a new line of luxury, oversized footwear.",
  ],

  alienAbduction: [
    "Alien abductions are just a cover story for when people accidentally get stuck in their own closets while sleepwalking.",
    "Aliens abduct people to teach them how to properly fold fitted sheets and bring order to linen closets everywhere.",
    "Alien abductions are actually part of an intergalactic reality TV show called 'The Most Hilariously Confused Earthlings.'",
  ],

  cropCircles: [
    "Crop circles are created by artistic aliens with a penchant for landscape design and a passion for agriculture.",
    "Crop circles are the result of a cosmic breakdancing competition between rival gangs of interstellar worms.",
    "Crop circles are actually the work of retired garden gnomes looking for a creative outlet and a bit of excitement.",
  ],
};

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.post("/process-input", (req, res) => {
  const userInput = req.body.userInput;

  const classification = classifier.classify(userInput);

  const responseCategory = predefinedResponses[classification];

  let response;
  if (responseCategory) {
    const randomIndex = Math.floor(Math.random() * responseCategory.length);
    response = responseCategory[randomIndex];
  } else {
    response = "Sorry, I didn't understand your message.";
  }

  res.json({ response });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
