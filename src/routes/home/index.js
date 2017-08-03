
import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  return {
    chunks: ['home'],
    title: 'Weather today',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;