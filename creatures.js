
export default class Creatures {

  constructor(name,race,hp,meleedmg,rangedmg) {
    this.name = name;
    this.race = race;
    this.hp = hp;
    this.meleedmg = meleedmg;
    this.rangedmg = rangedmg;
  }



  get getHp() {
    return this.hp;
  }
  set setHp(x) {
    this.hp = x;
  }

  get getMeleedmg(){
    return this.meleedmg;
  }
  set setMeleedmg(y){
    this.meleedmg = y;
  }
  get getRangedmg(){
   return this.rangedmg;
  }
  set setRangedmg(c){
    this.rangedmg = c;
  }

  takeHeal(){
    if(this.hp < 80){
      this.hp = this.hp + 10

         const container = document.getElementById("mainField");

         const newElement = document.createElement("p");

         newElement.innerText = this.hp + " hp " + " you healing";

         newElement.className = "WinnerText";

         container.appendChild(newElement);

         container.scrollTop = container.scrollHeight;

    } else {
       const container = document.getElementById("mainField");

       const newElement = document.createElement("p");

       newElement.innerText = this.hp + " You have enough helth ";

       newElement.className = "moreHpText";

       container.appendChild(newElement);

       container.scrollTop = container.scrollHeight;
    }

  }

  takeDamage(dmgValue){
    this.hp -= dmgValue;
     const container = document.getElementById("mainField");

     const newElement = document.createElement("p");

     newElement.innerText = this.name + " take damage " + dmgValue + " health left " + this.hp;

     newElement.className = "TurnText";

     container.appendChild(newElement);

     container.scrollTop = container.scrollHeight;

  }


}


