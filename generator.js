import { weightedRandom }
from "./weightedRandom.js";

export function generateLife(
    countries,
    regions,
    ethnicities
){

    const country =
        weightedRandom(
            countries,
            "population"
        );

    const region =
        weightedRandom(
            regions[country.code],
            "population"
        );

    const ethnicity =
        weightedRandom(
            ethnicities[country.code],
            "percent"
        );

    const gender =

        Math.random()
        <
        country.maleBirthRate

        ? "Male"
        : "Female";

    return {
        country,
        region,
        ethnicity,
        gender
    };
}
