
import React from 'react';
import Detailed from './detailed';
import Layout from '../../components/Layout';

async function action(context, params) {

  return {
    chunks: ['detailed'],
    title: 'Detailed weather forecast',
    component: (
      <Layout>
        <Detailed city={params.city}/>
      </Layout>
    ),
  };
}

export default action;