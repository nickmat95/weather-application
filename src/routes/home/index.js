import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

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