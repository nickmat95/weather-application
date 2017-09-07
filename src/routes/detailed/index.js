import React from 'react';
import Detailed from './Detailed';
import Layout from '../../components/Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';
import ReactResource from 'react-resource';
import { baseUrl } from '../../base-url.js';

const TownDetailed = new ReactResource(`${baseUrl}/api/weather/{:townID}`, {townID: ':townID'});

const store = createStore(reducer, applyMiddleware(thunk));

let getDetailedForecast = (townID) => {
  const detailedForecast = new TownDetailed({townID: townID});
  return detailedForecast.$get();
}

async function action(context, params) {
  
  let detailedForecast = await (getDetailedForecast(Number(params.city)));

  return {
    chunks: ['detailed'],
    title: 'Detailed weather forecast',
    component: (
    	<Provider store={store}>
	    	<Layout>
	    		<Detailed detailedForecast={detailedForecast} />
	    	</Layout>
    	</Provider>
    ),
  };
}

export default action;