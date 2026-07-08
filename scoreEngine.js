export function getLifeScore(data){

    let score = 0;

    score +=
        normalizeGDP(
            data.country.gdpPPP
        ) * 0.35;

    score +=
        normalizeHappiness(
            data.country.happiness
        ) * 0.35;

    score +=
        normalizeHealth(
            data.country.healthcareIndex
        ) * 0.20;

    score +=
        normalizeFreedom(
            data.country.freedomIndex
        ) * 0.10;

    score *= 10;

    score +=
        data.region.urbanScore;

    if(
        data.gender==="Female"
    ){

        score +=
           femaleModifier(
               data.country
           );
    }

    score +=
       ethnicityModifier(
           data.country.code,
           data.ethnicity
       );

    return Math.round(score);
}

function normalizeGDP(v){

    return Math.min(v/1000,100);
}

function normalizeHappiness(v){

    return v*10;
}

function normalizeHealth(v){

    return v;
}

function normalizeFreedom(v){

    return v;
}
