export default class Pokemon {
    constructor(id, img, name, size, weight, type, pv, smallattack, specialAttack) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.type = type;
        this.pv = pv;
        this.smallattack = smallattack;
        this.specialAttack = specialAttack;
    }

    pokemonAttack(cible, pvPokemon) {
        let attack = "";
        const pvCritik = pvPokemon * 0.2;

      

        // gestion des différentes attaques en fonction des points de vie de pikachu ( si - 20%)
        console.log(` pour info le pv critique de  ${this.name} est de ${pvCritik}`)
        if (this.pv <= pvCritik) {

            attack = this.specialAttack;
            console.log(`  ${this.name} utilise sa speciale attaque car son pv a atteind les ${pvCritik}`)

        } else {
            attack = this.smallattack;
            console.log(`${this.name} attaque ${cible.name} avec son attaque ${attack.name}`);
        }

        this.pokemonCriticalAttack(cible,attack)
      
    }

    pokemonCriticalAttack(pokemonTarget,objectAttack){
          // gestion de l'attaque critique (10% de chance)
          const isCriticalAttack = objectAttack.ramdomCriticalAttack();
          isCriticalAttack ? console.log(`${this.name} utilise son attaque critique (il avait 10% de chance de l'utiliser)`) : console.log(`${this.name} utilise son attaque normale`)
  
          const degatsValue = objectAttack.nbDamage;
          const degatsValueWithCriticalAttack = degatsValue * 2;
          const nbFinalDamage = isCriticalAttack ? degatsValueWithCriticalAttack : degatsValue
          console.log(`${this.name} enlève ${nbFinalDamage} pv à ${pokemonTarget.name}`);
          let pvPokemonTargetAfterDamages = pokemonTarget.pv - nbFinalDamage;
          pokemonTarget.pv = pvPokemonTargetAfterDamages
  
          if (pvPokemonTargetAfterDamages <= 0) {
              console.log(pokemonTarget.name + " " + "est KO !")
          } else {
              console.log(`il reste à  ${pokemonTarget.name} ${pvPokemonTargetAfterDamages} points de vie`);
          }

    }
}
