
import React from 'react';
import Detailed from './detailed';
import Layout from '../../components/Layout';
import Route from '../../router';

async function action({ fetch }) {
  return {
    chunks: ['detailed'],
    title: 'Detailed weather forecast',
    component: (
      <Layout>
        <Detailed />
      </Layout>
    ),
  };
}

export default action;