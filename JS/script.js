import  Pokemon from './class_Pokemon.js';
import Attack from "./class_Attack.js";


// Pokemon Pikachu
const attackPikachu = new Attack("Statik", 10);
const specialAttackPikachu = new Attack("Paratonnerre", 25);

const pikachu = new Pokemon(25, "Pikachu", "40 cm", "6kg", "Electrique", 82, attackPikachu, specialAttackPikachu);

console.log(pikachu)


// Pokemon Evoli
const attackEvoli = new Attack("Adaptabilité", 9);
const specialAttackEvoli = new Attack("Anticipation", 15);

const evoli = new Pokemon(133, "Evoli", "30 cm", "6.5kg", "Normal", 70, attackEvoli, specialAttackEvoli);




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
    console.log("Pikchuuuuu à l'attaaaaaaaaaaaaaaque!!! ");
    pikachu.pokemonAttack(evoli);
    epicBattle();
} else {
    console.log("Evoliiiiii au combaaaaaat !!! ")

    evoli.pokemonAttack(pikachu);
    epicBattle();
}







