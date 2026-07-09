console.log("APP LOADED");
console.log("MODULE OK");
顯示更多行
import { generateLife }
from "./generator.js";

import { getLifeScore }
from "./scoreEngine.js";

let countries;
let regions;
let ethnicities;

async function init(){

    countries =
        await fetch(
            "./data/countries.json"
        ).then(r=>r.json());

    regions =
        await fetch(
            "./data/regions.json"
        ).then(r=>r.json());

    ethnicities =
        await fetch(
            "./data/ethnicities.json"
        ).then(r=>r.json());
}

function rarity(score){

    if(score>=900) return "UR";

    if(score>=850) return "SSR";

    if(score>=750) return "SR";

    if(score>=500) return "R";

    return "P";
}

document.addEventListener(
"DOMContentLoaded",
async()=>{

    await init();

    document
    .getElementById("rollBtn")
    .onclick=()=>{

        const life =
            generateLife(
                countries,
                regions,
                ethnicities
            );

        const score =
            getLifeScore(life);

        const rank =
            rarity(score);

        document
        .getElementById("result")
        .innerHTML=
        `
        <div class="card">

            <h2>${rank}</h2>

            🌎 ${life.country.name}<br>

            📍 ${life.region.name}<br>

            👤 ${life.gender}<br>

            🧬 ${life.ethnicity.name}<br>

            <br>

            ⭐ 分數:
            ${score}

        </div>
        `;
    };
});
