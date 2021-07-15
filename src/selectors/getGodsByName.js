import { gods } from "../data/Gods";


export const getGodsByName = ( name = "") => {

    if ( name === "" ) {
        return [];
    }


    name = name.toLocaleLowerCase();
    return gods.filter( gods => gods.deity.toLocaleLowerCase().includes(name) )


}