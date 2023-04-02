
// front ajout dynamique des cartes pokémons

import Attack from "./class_Attack.js";
import Pokemon from "./class_Pokemon.js";

const pokemonCard = document.getElementById("pokemon-card");

const infosAttackPikachu = new Attack("Statik", 10) ;
const infosSuperAttackPikachu = new Attack("Paratonnerre", 25) ;
const infosPikachu = new Pokemon(25, "Pikachu", "40 cm", "6kg", "Electrique", 82, infosAttackPikachu, infosSuperAttackPikachu);


const infosAttackEvoli = new Attack("Adaptabilité", 9);
const infosSuperAttackEvoli = new Attack("Anticipation", 15) ;
const infosEvoli = new Pokemon(133, "Evoli", "30 cm", "6.5kg", "Normal", 70, infosAttackEvoli, infosSuperAttackEvoli);

const arrayPokemon = [infosPikachu,infosEvoli];
console.log(arrayPokemon);

arrayPokemon.map((pokemon)=>{
    console.log(pokemon)
})




