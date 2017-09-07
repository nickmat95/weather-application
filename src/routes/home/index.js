import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';
import { baseUrl } from '../../base-url.js';
import ReactResource from 'react-resource';

const Forecast = new ReactResource(`${baseUrl}/api/all_forecast/{:forecast}`, {forecast: ':forecast'});
const forecastList = new Forecast();

const Town = new ReactResource(`${baseUrl}/api/towns/{:town}`, {town: ':town'});
const townList = new Town();

const Region = new ReactResource(`${baseUrl}/api/regions/{:region}`, {region: ':region'});
const regionList = new Region();

const store = createStore(reducer, applyMiddleware(thunk));

let getWeatherItems = () => forecastList.$get();
let getRegionsList = () => regionList.$query();
let getTownsList = () => townList.$query();

async function action({ fetch }) {
  
  let weatherItems = await getWeatherItems();
  let regionsList = await getRegionsList();
  let townsList = await getTownsList();

  return {
    chunks: ['home'],
    title: 'Weather today',
    component: (
    	<Provider store={store}>
    		<Layout>
          <Home
          weatherItems={weatherItems}
          regionsList={regionsList}
          townsList={townsList}
          />
        </Layout>
      </Provider>
    ),
  };
}

export default action;