
// front ajout dynamique des cartes pokémons

import Attack from "./class_Attack.js";
import Pokemon from "./class_Pokemon.js";

const pokemonCard = document.getElementById("pokemon-card");

const infosAttackPikachu = new Attack("Statik", 10);
const infosSuperAttackPikachu = new Attack("Paratonnerre", 25);
const imgPikachu = "img/pika.jpg";
const infosPikachu = new Pokemon(25, imgPikachu, "Pikachu", "40 cm", "6kg", "Electrique", 82, infosAttackPikachu, infosSuperAttackPikachu);


const infosAttackEvoli = new Attack("Adaptabilité", 9);
const infosSuperAttackEvoli = new Attack("Anticipation", 15);
const imgEvoli = "img/evoli.jpg";
const infosEvoli = new Pokemon(133, imgEvoli, "Evoli", "30 cm", "6.5kg", "Normal", 70, infosAttackEvoli, infosSuperAttackEvoli);

const arrayPokemon = [infosPikachu, infosEvoli];
console.log(arrayPokemon);

const card = arrayPokemon.map((pokemon) => {
    return ` 
    <div id="card ${pokemon.id}" class="card">
            <section class="pokemon-identity">
                <div>
                    <img src=${pokemon.img} alt="${pokemon.name}">
                </div>
                <div class="pokemon-name">
                    <h2>${pokemon.name}</h2>
                </div>
            </section>  
            <section id="features">
                <div>
                    <h3>characteristics</h3>
                </div>
                <div class = features-infos>
                    <div>
                        <h4>Size</h4>
                        <p>${pokemon.size}</p>
                    </div>
                    <div>
                        <h4>Weight</h4>
                        <p>${pokemon.weight}</p>
                    </div>
                    <div>
                        <h4>Type</h4>
                        <p>${pokemon.type}</p>
                    </div>
                    <div class="attack-type">
                        <div class="small-attack">
                            <h4>Small attack</h4>
                            <p> <span>Name</span> : ${pokemon.smallattack.name} </p>
                            <p> <span>Damage</span> : ${pokemon.smallattack.nbDamage} </p>
                        </div>
                        <div class="super-attack">
                            <h4>Super attack</h4>
                            <p> <span>Name</span>: ${pokemon.specialAttack.name} </p>
                            <p> <span>Damage</span> : ${pokemon.specialAttack.nbDamage} </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    `
}).join(" ");
pokemonCard.innerHTML = card;



