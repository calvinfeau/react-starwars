import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {getStarships} from '../../services/sw-api';
import HomePage from '../HomePage/HomePage'
import StarshipPage from '../StarshipPage/StarshipPage'
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  state = {
    starships: []
  };

  async componentDidMount() {
    const allStarships = await getStarships();
    this.setState({starships: allStarships.results})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route exact path='/' render={() => 
            <HomePage
              starships={this.state.starships}
            />
          } />
          <Route exact path='/starships/:id' render={(props) => 
            <StarshipPage 
            {...props}
            starships={this.state.starships}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;