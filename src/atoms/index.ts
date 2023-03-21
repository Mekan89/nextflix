import { atom } from "jotai";

export const filterAtom = atom(false);
export const queryAtom = atom("");
export const activeSearchAtom = atom(false);

export const filterState = atom({
    year: `1960-${new Date().getFullYear()}`,
    rating: "1-10",
    sortByRelease: "-1",
    genre: "",
});
