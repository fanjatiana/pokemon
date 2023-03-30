class Pokemon {
    constructor(id,name,size,weight, type, pv, smallattack, specialAttack){
        this.id=id;
        this.name=name;
        this.size=size;
        this.weight=weight;
        this.type=type;
        this.pv=pv;
        this.smallattack=smallattack;
        this.specialAttack=specialAttack;
    }

    pokemonAttack(nomPokemon,classAttack){
        
        // attaque d'Evoli (valeurs de classe Attack : "Anticipation", 15 )
        let hisAttack = classAttack;

        console.log(nomPokemon +" " + hisAttack.name);
       
        // reste de points de vie de pikachu 
        console.log( "il enlève " + hisAttack.nbDamage + " points de vie  à " + this.name);
        let restPVOfThisPokemon = this.pv - hisAttack.nbDamage ;
        console.log( "reste donc à " + this.name + " " +  restPVOfThisPokemon + "points de vie");

        // différentes attaques en fonction des points de vie de pikachu ( si - 20%)
       const restPVCritik = restPVOfThisPokemon*0.2;
        console.log( "special attack si le pv d'" + nomPokemon + " " + "atteind les " + " " +  restPVCritik)
   
        if(this.pv === restPVCritik){
            console.log(nomPokemon + "attack degat"  +  " " + this.specialAttack);
            return restPVCritik;
        }else{
            console.log(nomPokemon + "attack degat" + " " + this.smallattack);
        }
        return restPVOfThisPokemon
    }

  
}

class Attack {
    constructor(name,nbDamage){
        this.name=name;
        this.nbDamage = nbDamage;
    }
}

// Pokemon Pikachu

const pikachu = new Pokemon (025,"Pikachu", "40 cm", "6 kg", "Electrique",82, 55, 50 );
const attackPikachu = new Attack ("Statik", 10 );
const specialAttackPikachu = new Attack ("Paratonnerre", 25 );

// Pokemon Evoli

const evoli = new Pokemon (133,"Evoli", "30 cm", "6.5 kg", "Normal",70, 55, 45 );
const attackEvoli = new Attack ("Adaptabilité", 9 );
const specialAttackEvoli = new Attack ("Anticipation", 15 );



// Tirage au sort

const getRandomInt= (max) => {
    return Math.floor(Math.random() * max);
  }
  
const startMatch = getRandomInt(2);
if(startMatch === 1){
    console.log("Pikchuuuuu à l'attaaaaaaaaaaaaaaque (>.<) !!! ");
    const pvEvoliAfterAttackPikachu= evoli.pokemonAttack("Pikachu",specialAttackPikachu);
    console.log( "il reste" +  pvEvoliAfterAttackPikachu  +" " + "points de vie à pikachuu !! ")
}else{
    console.log("Evoliiiiii au combaaaaaat !!! (>o<) ")

    const pvPikachuAfterAttackEvoli = pikachu.pokemonAttack("Evoli",specialAttackEvoli);
    console.log( "il reste" +  pvPikachuAfterAttackEvoli + " " + "points de vie à pikachuu !! ")

}






