export default class Attack {
    constructor(name, nbDamage) {
        this.name = name;
        this.nbDamage = nbDamage;
    }

    ramdomCriticalAttack() {
        return Math.random() < 0.1;
    }
}