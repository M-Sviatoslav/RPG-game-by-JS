import getRandomIntInclusive from "./Tools/random.js";

export default function Battle(Hero, Enemy) {
  const meleeAttack = document.getElementById("meleeAttack");
  const rangeAttack = document.getElementById("rangeAttack");
  const heal = document.getElementById("heal");


  let turnToAttack = getRandomIntInclusive(0, 1);

  if (turnToAttack == 0) {
    enemyTurn();
  }

  function enemyTurn() {
    Hero.takeDamage(Enemy.getMeleedmg);
    turnToAttack = 1;
    if (Hero.getHp <= 0) {
      turnToAttack = 0;
       const container = document.getElementById("mainField");

       const newElement = document.createElement("p");

       newElement.innerText = "YOU DIED"

       newElement.className = "WinnerText";

       container.appendChild(newElement);

       container.scrollTop = container.scrollHeight;
    }
  }

  meleeAttack.addEventListener("click", () => {
    if (turnToAttack == 1) {
      Enemy.takeDamage(Hero.getMeleedmg);
      turnToAttack = 0;
      if (Enemy.getHp <= 0) {
         const container = document.getElementById("mainField");

         const newElement = document.createElement("p");

         newElement.innerText = "YOU WIN";

         newElement.className = "WinnerText";

         container.appendChild(newElement);

         container.scrollTop = container.scrollHeight;
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
        const container = document.getElementById("mainField");

         const newElement = document.createElement("p");

         newElement.innerText = "YOU WIN";

         newElement.className = "WinnerText";

         container.appendChild(newElement);

         container.scrollTop = container.scrollHeight;
      } else {
        enemyTurn();
      }


    }
  } );

  heal.addEventListener("click",()=>{
    if(turnToAttack == 1){
      Hero.takeHeal()
      turnToAttack = 0
      enemyTurn()
    }
  })



}
