import getRandomIntInclusive from "./Tools/random.js";

export default function Battle(Hero, Enemy) {
  const meleeAttack = document.getElementById("meleeAttack");
  const rangeAttack = document.getElementById("rangeAttack");

  let turnToAttack = getRandomIntInclusive(0, 1);

  if (turnToAttack == 0) {
    enemyTurn();
  }

  function enemyTurn() {
    Hero.takeDamage(Enemy.getMeleedmg);
    turnToAttack = 1;
    if (Hero.getHp <= 0) {
      turnToAttack = 0;
      alert("YOU DIED");
    }
  }

  meleeAttack.addEventListener("click", () => {
    if (turnToAttack == 1) {
      Enemy.takeDamage(Hero.getMeleedmg);
      turnToAttack = 0;
      if (Enemy.getHp <= 0) {
        alert("YOU WIN");
      } else {
        enemyTurn();
      }
    }
  });
  rangeAttack.addEventListener("click", () => {
    if (turnToAttack == 1) {
      Enemy.takeDamage(Hero.getRangedmg);
      turnToAttack = 0;
      if (Enemy.getHp <= 0) {
        alert("YOU WIN");
      } else {
        enemyTurn();
      }
    }
  });
}
