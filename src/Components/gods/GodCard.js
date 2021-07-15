import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { godsImages } from './GodScreen';



export const GodCard = ({id, deity, kind, alter_ego, title, characters }) => {
    return (
        <Link to={`./god/${id}`} className="my-card">
            <img src={ godsImages(`./${ id }.jpg`).default } className="img img-responsive" alt={deity}/>
            <div className="profile-name">{deity}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{kind}</h3>
                            <p>title: <br />{title}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GodCard;
