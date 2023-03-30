class Pokemon {
    constructor(id, name, size, weight, type, pv, smallattack, specialAttack) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.type = type;
        this.pv = pv;
        this.smallattack = smallattack;
        this.specialAttack = specialAttack;
    }

    pokemonAttack(cible) {

        let attack = "";

        // différentes attaques en fonction des points de vie de pikachu ( si - 20%)
        const restPVCritik = this.pv * 0.2;
        console.log(" utilise sa speciale attaque si le pv d'" + this.name + " " + "atteind les " + " " + restPVCritik)

        if (this.pv <= restPVCritik) {
            attack = this.specialAttack

        } else {
            attack = this.smallattack;
        }
        console.log(`${this.name} attaque ${cible.name} avec son attaque ${attack.name}`);

        const attackCritical = attack.isCriticalAttack();
        attackCritical ? console.log("attaque critique!!!!") : console.log("attaque normale...")
        const degatsValue = attack.nbDamage;
        const degatsValueWithCC = degatsValue * 2;
        const finalDamage = attackCritical ? degatsValueWithCC : degatsValue
        // reste de points de vie de la cible 
        console.log(this.name + " enlève " + finalDamage + " pv à " + cible.name);
        let pvCible = cible.pv - finalDamage;
        cible.pv = pvCible

        if (pvCible <= 0) {
            console.log(cible + " " + "est KO !")
        } else {
            console.log("il reste à " + " " + cible.name + " " + pvCible + " " + "points de vie");
        }
    }
}

class Attack {
    constructor(name, nbDamage) {
        this.name = name;
        this.nbDamage = nbDamage;
    }

    isCriticalAttack() {
        return Math.random() < 0.1;
    }
}

// Pokemon Pikachu
const attackPikachu = new Attack("Statik", 10);
const specialAttackPikachu = new Attack("Paratonnerre", 25);

const pikachu = new Pokemon(025, "Pikachu", "40 cm", "6 kg", "Electrique", 82, attackPikachu, specialAttackPikachu);

console.log(pikachu)


// Pokemon Evoli
const attackEvoli = new Attack("Adaptabilité", 9);
const specialAttackEvoli = new Attack("Anticipation", 15);

const evoli = new Pokemon(133, "Evoli", "30 cm", "6.5 kg", "Normal", 70, attackEvoli, specialAttackEvoli);




// Tirage au sort
const epicBattle = () => {
    console.log(pikachu.pv > 0 && evoli.pv > 0)
    while (pikachu.pv > 0 && evoli.pv > 0){
        pikachu.pokemonAttack(evoli);
        console.log("pikachu attaque")
        if(evoli.pv >= 0){
            console.log("pikachu a gagné")
            break;
        }
        evoli.pokemonAttack(pikachu);
    }
}
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const startMatch = getRandomInt(2);
if (startMatch === 1) {
    console.log("Pikchuuuuu à l'attaaaaaaaaaaaaaaque (>.<) !!! ");
    pikachu.pokemonAttack(evoli);
    epicBattle();
} else {
    console.log("Evoliiiiii au combaaaaaat !!! (>o<) ")

    evoli.pokemonAttack(pikachu);
    epicBattle();
}

// combat non stop : boucle while ? 





