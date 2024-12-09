import Creatures from "./creatures.js";
import getRandomIntInclusive from "./Tools/random.js";
import Battle from "./battle.js";

// 0- Earth
// 1- Forrest
// 2- Water


class GlobalMap {
  lines = [
    [0,0,0,0,0],
    [0,0,2,1,1],
    [0,0,2,2,1],
    [0,0,0,2,1],
    [0,0,0,1,1],
  ]
}

let map = new GlobalMap()





let Hero = new Creatures("Konrad", "Human", 100, 10, 7);

let Enemy = new Creatures(
  "Bufall",
  "Orc",
  getRandomIntInclusive(45, 75),
  getRandomIntInclusive(4, 7),
  getRandomIntInclusive(3, 5)
);


Battle(Hero,Enemy)