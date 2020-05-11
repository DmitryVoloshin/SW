import React from 'react';
import ItemList from '../item-list';
import { withData } from '../HOC';
import SwapiService from '../../service/service'

const swapiService = new SwapiService()

const{
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const withChildFunction = ( Wrapped, fn) =>{
    return ( props ) =>{
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({model,name}) => <spna>{name}({model})</spna>


const PersonList = withData(
    withChildFunction(ItemList,renderName),
    getAllPeople)
const StarshipList = withData(
    withChildFunction(ItemList,renderModelAndName)
    ,getAllStarships)
const PlanetList = withData(
    withChildFunction(ItemList,renderName)
    ,getAllPlanets)


export {
    PersonList,
    StarshipList,
    PlanetList
}