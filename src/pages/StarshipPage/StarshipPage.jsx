import React from 'react';
import {Link} from 'react-router-dom';
import PilotList from '../../components/PilotList/PilotList'
import './StarshipPage.css';

const StarshipPage = (props) => {
    return (
        <div className='StarshipPage'>
            <div>{props.starships[props.match.params.id].name}</div>
            <div>{props.starships[props.match.params.id].model}</div>
            <PilotList
                pilots={props.starships[props.match.params.id].pilots}
            />
            <Link to='/'>
                <button>Return to Starship List</button>
            </Link>
        </div>
    )
}

export default StarshipPage