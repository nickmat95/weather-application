import ReactResource from 'react-resource';

const Forecast = new ReactResource('/api/all_forecast/{:forecast}', {forecast: ':forecast'});
const forecastList = new Forecast();

export const getWeatherItems = () => {
	return dispatch =>  {
		forecastList.$get()
		.then(result => {
        	dispatch({ type: 'DEFAULT', payload: result });
        })
        .catch(error => console.error(error));
    }
}