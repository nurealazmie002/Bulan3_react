const lyrics = [
  "🎵 I got my head out the sunroof,",
  "I'm blasting my favorite tunes,",
  "I only got one thing on my mind 🎶",
  "You got me stuck on the thought of you,",
  "You're making me feel brand new."
];


const beat = 600; 
const charSpeed = 50;
let totalDelay = 0;


function typeLine(line, lineDelay = beat * 2.5) {
  for (let i = 0; i < line.length; i++) {
    setTimeout(() => process.stdout.write(line[i]), totalDelay + i * charSpeed);
  }

  
  totalDelay += line.length * charSpeed + lineDelay;
  setTimeout(() => process.stdout.write("\n"), totalDelay);
}


lyrics.forEach((line) => typeLine(line));


setTimeout(() => {
  console.log("\n🌞 End of 'Sunroof' lyrics simulation 🎶");
}, totalDelay + beat);
