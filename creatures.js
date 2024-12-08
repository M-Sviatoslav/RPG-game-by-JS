
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

  takeDamage(dmgValue){
    this.hp -= dmgValue;
    console.log(this.hp)
  }


}


