import type localization from "../../config/localization";

type Pokemon = {
    dex: number,
    speciesId: string,
    familyId: string | null,
    types: [ string, string | "none" ],
    isShadow: boolean,
    leagues: {
        [ league in League ]: {
            score: number,
        } | null
    };
};

type EvolutionsListLocalized = {
    [ familyId: string ]: {
        [ lang: string ]: string[];
    };
};

type League = "great" | "ultra" | "master";

type PokemonFamilyList = {
    [ familyId: keyof typeof localization.languages ]: string[];
}[];