// You found directions to hidden treasure only written in words.  The possible directions are 'NORTH' 'SOUTH' 'EAST' 'WEST'.

// 'NORTH' and 'SOUTH' are opposite directions, as are 'EAST' and 'WEST'.  Going in one directiosn and coming back in the opposite direction leads to going nowhere.  Someone else also has these directiosn to the treasure and you need to get there first.  Since the directions are long, you decide to write a program to figure out the fastest and most direct route to the treasure.

// Write a function that will take a list of strings and will return a list of strings wit hthe unneeded directions removed. (NORTH<->SOUTH or EAST<->WEST side by side).

// SAMPLE INPUT
// ['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'SOUTH', 'NORTH', 'WEST']

// SAMPLE OUTPUT
// ['WEST', 'WEST']

function directionReduction(directions) {
  for (let i = 0; i < directions.length; i += 1) {
    if (
      (directions[i] === "NORTH" && directions[i + 1] === "SOUTH") ||
      (directions[i] === "SOUTH" && directions[i + 1] === "NORTH") ||
      (directions[i] === "EAST" && directions[i + 1] === "WEST") ||
      (directions[i] === "WEST" && directions[i + 1] === "EAST")
    ) {
      while (directions.includes("NORTH") && directions.includes("SOUTH")) {
        directions.splice(directions.indexOf("NORTH"), 1);
        directions.splice(directions.indexOf("SOUTH"), 1);
      }
      while (directions.includes("EAST") && directions.includes("WEST")) {
        directions.splice(directions.indexOf("EAST"), 1);
        directions.splice(directions.indexOf("WEST"), 1);
      }
    }
  }
  return directions;
}

console.log(
  directionReduction([
    "NORTH",
    "EAST",
    "WEST",
    "SOUTH",
    "WEST",
    "SOUTH",
    "NORTH",
    "WEST",
  ])
);
