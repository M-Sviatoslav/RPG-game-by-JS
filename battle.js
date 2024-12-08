import getRandomIntInclusive from "./Tools/random.js";

export default function Battle(Hero, Orc) {
  const meleeAttack = document.getElementById("meleeAttack");
  const rangeAttack = document.getElementById("rangeAttack");

  let turnToAttack = getRandomIntInclusive(0, 1);

  if (turnToAttack == 0) {
    enemyTurn();
  }

  function enemyTurn() {
    Hero.takeDamage(Orc.getMeleedmg || Orc.getRangedmg);
    turnToAttack = 1;
    if (Hero.getHp <= 0) {
      turnToAttack = 0;
      alert("YOU DIED");
    }
  }

  meleeAttack.addEventListener("click", () => {
    if (turnToAttack == 1) {
      Orc.takeDamage(Hero.getMeleedmg);
      turnToAttack = 0;
      if (Orc.getHp <= 0) {
        alert("YOU WIN");
      } else {
        enemyTurn();
      }
    }
  });
  rangeAttack.addEventListener("click", () => {
    if (turnToAttack == 1) {
      Orc.takeDamage(Hero.getRangedmg);
      turnToAttack = 0;
      if (Orc.getHp <= 0) {
        alert("YOU WIN");
      } else {
        enemyTurn();
      }
    }
  });
}
