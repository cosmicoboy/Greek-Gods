import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getGodById } from "../../selectors/getGodById"

// import hades from '../../assets/gods/Ct-Hades.jpg' // recuros estático

export const godsImages = require.context('../../assets/gods', true)

export const GodScreen = ({ history}) => {

    const { godsId } = useParams();
    
    const god = useMemo(() => getGodById( godsId ), [godsId])


    if  ( !god ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        
        if( history.lenght <= 2 ) {
            history.push('/');
        }else {
            history.goBack();

        }
        
    }

    const { 
        deity, 
        kind, 
        alter_ego, 
        title, 
    } = god;



    //css para modificar a futuro
    return (

        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={ `../assets/gods/${ godsId }.jpg` } //desde public/assets
                    // src= { godsImages } // import
                    src= { godsImages(`./${ godsId }.jpg`).default }
                    alt= { deity }
                    className="img-thumbnail animate__animated animate__fadeInRight"
                />    
            </div>

            <div className= "col-8">
                <h3> { deity } </h3>
                <ul className= "list-group list-group-flush" > </ul>
                    <li className= "list-group-item animate__animated animate__fadeInRight"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className= "list-group-item animate__animated animate__fadeInRight"> <b> Kind: </b> { kind } </li>
                    <li className= "list-group-item animate__animated animate__fadeInRight"> <b> Title: </b> { title } </li>
            </div>

                <button 
                    className= "btn btn-outliner-info animate__animated animate__slideInUp"
                    onClick = { handleReturn }
                >
                    Return
                </button>

        </div>
    )
}
