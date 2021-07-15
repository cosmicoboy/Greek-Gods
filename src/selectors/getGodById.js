import { gods } from "../data/Gods"

export const getGodById = ( id ) => {
    // console.log('id', id);
    // let test = gods.find( god => god.id === id )
    // console.log(test);
    // return gods[0]
    return gods.find( god => god.id === id )
}


