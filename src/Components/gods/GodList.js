import React, { useMemo } from 'react'
import { getGodsByKind } from '../../selectors/getGodsByKind'
import { GodCard } from './GodCard';

export const GodList = ({kind}) => {

    const gods  = useMemo( () => getGodsByKind( kind ), [ kind ] )


    // const gods = getGodsByKind(kind);


    return (
        <ul className= "card-columns animate__animated animate__fadeIn">
            {
                gods.map( god => (
                    <GodCard 
                        key={ god.id }
                        {... god }
                    />
                    
                ))
            
            }
        </ul>
    )
}
