import Creatures from "./creatures.js";
import getRandomIntInclusive from "./Tools/random.js";
import Battle from "./battle.js";



let Hero = new Creatures("Konrad", "Human", 100, 10, 7);

let Enemy = new Creatures(
  "Bufall",
  "Orc",
  getRandomIntInclusive(45, 65),
  getRandomIntInclusive(4, 7),
  getRandomIntInclusive(3, 5)
);


Battle(Hero,Enemy)