class AnimeCharacter {
    constructor(name, hometown, superPower, weakness, health, powerLevel){
        this.name = name;
        this.hometown = hometown;
        this.weakness = weakness; 
        this.health = health;
        this.superPower = superPower;
        this.powerLevel = powerLevel;
        this.specialDamage = 50; 
    }
    dodge(){
    }
    block(){
    }
    powerUp(){
      if(this.powerLevel >=96){
          this.powerLevel = 100;
          console.log(`${this.name} power level is full! Special Available!`);
          }else{
           this.powerLevel += 4;
           console.log(`${this.name} power level is now at ${this.powerLevel}%`);
        }
}
specialAttack(opponent){
    // create a console.log explaining your attack and the amount of damage to an opponent...
    if(this.powerLevel == 100){
        console.log("Swindler unleahes her special attack!!! Being smart!!!");
        this.powerLevel -= 40;
        opponent.health -= this.specialDamage;
        console.log(`${opponent.name}'s health has been depleted by ${this.specialDamage}!${opponent.name} health: ${opponent.health}%`);
    }else{
        console.log(`Swinders power level is currently at ${this.powerLevel}. Power up to full strength to unleash your special attack!!`)
     


    }
}
Levi Ackerman(opponent){
    opponent.health -=20;
    console.log(`${opponent.name}:he's ruthless and also he calculates fighting skills with his intense demeanor.${opponent.name}'s HEALTH: ${opponent.health}% 20`);
}
Itachi Uchiha(opponent){
opponent.health -=10;
console.log(`his intelligence and also his speed.${opponent.name}'s HEALTH:${opponent.health}% 50`);
}
let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);
</script>