//I've been really intrigued with the generated literacy we've been examing at lately. Unfortunately
//haven't had much time to look too deep into it as I'm currently abroad. But the code I created is very
//similar to Knowles and I only really changed some of the list materials used for the code to generate.

let poem;
let grammar = tracery.createGrammar({
  "origin": "A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#",
  "material": [
    "Brick",
    "Wood",
    "Glass",
    "Concrete",
    "Stone",
    "Steel",
    "Clay",
    "Straw",
    "Bamboo",
    "Adobe"
  ],
  "place": [
    "Dreams",
    "Whispers",
    "Shadows",
    "Solitude",
    "Silence",
    "Echoes",
    "Memories",
    "Forgotten Lore",
    "Misty Moors",
    "Time's Embrace"
  ],
  "light_source": [
    "Candlelight",
    "Sunlight",
    "Moonlight",
    "Starlight",
    "Firelight",
    "Lanterns",
    "Neon Glow",
    "Lighthouse Beam",
    "Glowing Embers",
    "Bioluminescence"
  ],
  "inhabitants": [
    "Ghosts",
    "Whispering Spirits",
    "Wandering Souls",
    "Lost Wanderers",
    "Lingering Shadows",
    "Silent Watchers",
    "Ethereal Beings",
    "Time Travelers",
    "Cosmic Entities",
    "Mystic Guardians"
  ]
});

grammar.addModifiers(tracery.baseEngModifiers);

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  poem = grammar.flatten("#origin#");

  for (let i = 0; i < 4; i++) {
    textSize(20);
    text(poem, 10, 40 + i * 100);
  }
}
