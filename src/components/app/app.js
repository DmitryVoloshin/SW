import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';


import './app.css'
import PeoplePage from '../people-page';
import SwapiService from '../../service/service';




export default class App extends React.Component{


  swapiService = new SwapiService();

  state = {
    showRandomPlanet : true,
    hasError:false,
  };


 toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch(){
    this.setState({hasError:true});
  }

  render(){

    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> :
    null;

    return <div className="main-content">
        

    <Header/>
    {planet}

    <button className="toggle-button" onClick={this.toggleRandomPlanet}>
      Toggle
    </button>
    <PeoplePage/>
    {/* <div className="stars"></div>
  <div className="twinkling"></div>   */}

    <div>
      <div>
        <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPlanets}/>
      </div>
      <div>
        <PersonDetails personId={this.state.selectedPerson}/>
      </div>
    </div>


    </div>
}
}