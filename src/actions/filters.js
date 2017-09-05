import ReactResource from 'react-resource';

const Town = new ReactResource('/api/towns/{:town}', {town: ':town'});
const townList = new Town();

const Region = new ReactResource('/api/regions/{:region}', {region: ':region'});
const regionList = new Region();

export const getTownsAutocomplete = () => dispatch =>  {
	townList.$get()
    .then(result => {
    	dispatch({ type: 'TOWNS', payload: result });
    })
    .catch(error => console.error(error));
}

export const getRegionsAutocomplete = () => dispatch =>  {
	regionList.$get()
    .then(result => {
      dispatch({ type: 'REGIONS', payload: result });
    })
    .catch(error => console.error(error));
}
