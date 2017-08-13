
import React from 'react';
import More from './more-weather-info';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  return {
    chunks: ['more-weather-info'],
    title: 'More about ..',
    component: (
      <Layout>
        <More />
      </Layout>
    ),
  };
}

export default action;