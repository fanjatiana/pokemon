import Pokemon from "./class_Pokemon.js";
import Attack from "./class_Attack.js";

// Pokemon Pikachu
const attackPikachu = new Attack("Statik", 10);
const imgPikachu = "img/pika.jpg";
const specialAttackPikachu = new Attack("Paratonnerre", 25);
const pikachu = new Pokemon(
  25,
  imgPikachu,
  "Pikachu",
  "40 cm",
  "6kg",
  "Electrique",
  82,
  attackPikachu,
  specialAttackPikachu
);
const pvPikachu = pikachu.pv;

// Pokemon Evoli
const attackEvoli = new Attack("Adaptabilité", 9);
const imgEvoli = "img/evoli.jpg";
const specialAttackEvoli = new Attack("Anticipation", 15);
const evoli = new Pokemon(
  133,
  imgEvoli,
  "Evoli",
  "30 cm",
  "6.5kg",
  "Normal",
  70,
  attackEvoli,
  specialAttackEvoli
);
const pvEvoli = evoli.pv;

// fonction permettant le combat tour à tour avec gestion du vainqueur/perdant
const epicBattle = () => {
  while (pikachu.pv > 0 && evoli.pv > 0) {
    pikachu.pokemonAttack(evoli, pvPikachu);

    if (evoli.pv <= 0) {
      console.log("pikachu a gagné");
      const victory = document.getElementById("victory");
      victory.textContent = "Evoli is KO ! Pikachu won !";
      break;
    }
    if (pikachu.pv <= 0) {
      console.log("evoli a gagné");
      const victory = document.getElementById("victory");
      victory.textContent = "Pikachu is KO ! Evoli won !";
      break;
    }
    evoli.pokemonAttack(pikachu, pvEvoli);
  }
};

//  fonction de tirage au sort du premier pokemon qui doit combattre

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const startBattle = () => {
  //console.clear();
  const victory = document.getElementById("victory");
  victory.textContent = "";
  const resultRandom = getRandomInt(2);
  if (resultRandom === 1) {
    console.log("Pikchuuuuu à l'attaaaaaaaaaaaaaaque!!! ");
    pikachu.pokemonAttack(evoli, pvPikachu);
    epicBattle(pikachu);
  } else {
    console.log("Evoliiiiii au combaaaaaat !!! ");
    evoli.pokemonAttack(pikachu, pvEvoli);
    epicBattle(evoli);
  }
};

document.querySelector(".btn").addEventListener("click", () => {
  startBattle();
});
