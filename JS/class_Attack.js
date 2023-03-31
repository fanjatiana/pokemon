export default class Attack {
    constructor(name, nbDamage) {
        this.name = name;
        this.nbDamage = nbDamage;
    }

    isCriticalAttack() {
        return Math.random() < 0.1;
    }
}