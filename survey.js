const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name, listen, meal, toEat, sport, superpower;

rl.question("What's your name? Nicknames are also acceptable :)? ", (name) => {
  name = name;
  rl.question("What do you listen to while doing that?", (listen) => {
    listen = listen;
    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.)",
      (meal) => {
        meal = meal;

        rl.question(
          "What's your favourite thing to eat for that meal?",
          (toEat) => {
            toEat = toEat;
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              sport = sport;

              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at!",
                (superpower) => {
                  superpower = superpower;

                  console.log(
                    `Thank you for your valuable feedback: ${name}  ${activity} ${listen}  ${meal} ${toEat} ${sport} ${superpower}    `
                  );

                  rl.close();
                }
              );
            });
          }
        );
      }
    );
  });
});
