import React from 'react';
import Detailed from './detailed';
import Layout from '../../components/Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const store = createStore(reducer, applyMiddleware(thunk));

async function action(context, params) {
  return {
    chunks: ['detailed'],
    title: 'Detailed weather forecast',
    component: (
    	<Provider store={store}>
	    	<Layout>
	    		<Detailed townID={Number(params.city)}/>
	    	</Layout>
    	</Provider>
    ),
  };
}

export default action;