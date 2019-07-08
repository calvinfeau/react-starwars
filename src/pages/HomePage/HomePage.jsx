import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <div className='HomePage'>
            {props.starships.map((starship, idx) => 
            <Link to={`/starships/${idx}`}>
                <button key={idx}>
                {starship.name} 
                </button>
            </Link>
            )}
        </div>
    )
}

export default HomePage