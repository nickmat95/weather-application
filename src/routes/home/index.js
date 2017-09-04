import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const store = createStore(reducer, applyMiddleware(thunk));

async function action({ fetch }) {
  return {
    chunks: ['home'],
    title: 'Weather today',
    component: (
    	<Provider store={store}>
    		<Layout>
          <Home />
        </Layout>
      </Provider>
    ),
  };
}

export default action;