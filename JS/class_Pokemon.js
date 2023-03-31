export default class Pokemon {
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
        console.log(`utilise sa speciale attaque si le pv d' ${this.name} atteind les ${restPVCritik}`)

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
        console.log(`${this.name} enlève ${finalDamage} pv à ${cible.name}`);
        let pvCible = cible.pv - finalDamage;
        cible.pv = pvCible

        if (pvCible <= 0) {
            console.log(cible + " " + "est KO !")
        } else {
            console.log(`il reste à  ${ cible.name} ${pvCible} points de vie`);
        }
    }
}
