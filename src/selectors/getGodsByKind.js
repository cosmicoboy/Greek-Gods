import { gods } from "../data/Gods"

export const getGodsByKind = ( kind ) => {

    const validPublishers = ["Cethonic", "Olimpians"]


    if ( !validPublishers.includes( kind )) {
        throw new Error(`kind "${ kind }" no es correcto `)
    }


    return gods.filter( god => god.kind === kind)
}