import React, { useMemo, useState } from 'react'
import queryString from "query-string"
import { useLocation } from 'react-router-dom';
// import { useForms } from '../../hooks/useForm';
import { GodCard } from '../gods/GodCard';
import { getGodsByName } from '../../selectors/getGodsByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q ='' } = queryString.parse( location.search );
    
    // const [ formValues, handleInputChange ] = useForms({
    //     searchText: q
    // }); 

    const [deitys, setDeitys] = useState("")

    
    const godsFilter  = useMemo( () => getGodsByName( q ), [q] )

    const handleSearch = (e) => {
        e.preventDefault();
        // history.push(`?q=${ searchText }`)    
        history.push(`?q=${ deitys }`)
        setDeitys("")
    }


    return (
        <div>
            <h1> Search </h1>
            <hr/>

            <div className= "row">

                <div className= "col-5">
                    <h4> Search Form</h4>
                    <hr />

                    <form onSubmit= {handleSearch} >
                        <input
                            type="text"
                            placeholder="Find you God"
                            className="form-control"
                            name="searchText"
                            // value={ searchText }
                            // onChange={ handleInputChange }
                            value={ deitys }
                            onChange={ (e) => {
                                setDeitys(e.target.value)
                            } }
                        />
                    <button
                        type= "submit"
                        className= "btn m-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                    </form>
                    
                </div>

                <div className= "col-7">

                        <h4> Results</h4>
                        <hr/>

                    {   

                        (q === "") 
                            && 
                            <div className= "alert alert-info">
                                Search a God Pal
                            </div>

                    }

                    {   

                        (q !== "" && godsFilter.length === 0) 
                            && 
                            <div className= "alert alert-danger">
                                There is any god with the name { q }
                            </div>

                    }


                    {
                        godsFilter.map( god =>(
                            <GodCard 
                                key={god.id}
                                {...god}
                            />
                        ))
                    }

                    

                </div>
            </div>





        </div>
    )
}
