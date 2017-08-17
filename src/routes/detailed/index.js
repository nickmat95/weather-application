
import React from 'react';
import Detailed from './detailed';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['detailed'],
    title: 'Detailed weather forecast',
    from: '',
    component: (
      <Layout>
        <Detailed />
      </Layout>
    ),
  };
}

export default action;