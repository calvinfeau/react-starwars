import React, {Component} from 'react';
import {getPilots} from '../../services/sw-api';

class PilotList extends Component {
    state = {
        pilots: []
    }

    async componentDidMount() {
        const pilotObject = await getPilots(this.props.pilots);
        this.setState({pilots: pilotObject});
    }

    render() {
        return(
            <div>
                {this.state.pilots.length ? 
                    this.state.pilots.map(pilot => 
                        <h2>{pilot.name}</h2>
                        ) 
                    : <h2>No Pilots</h2>
                }
            </div>
        )
    }    
}

export default PilotList