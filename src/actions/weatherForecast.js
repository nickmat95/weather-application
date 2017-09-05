import ReactResource from 'react-resource';

const Forecast = new ReactResource('/api/all_forecast/{:forecast}', {forecast: ':forecast'});
const forecastList = new Forecast();

const TownDetailed = new ReactResource('/api/weather/{:townID}', {townID: ':townID'});

export const getWeatherItems = () => dispatch =>  {
	forecastList.$get()
	.then(result => {
       	dispatch({ type: 'DEFAULT', payload: result });
    })
    .catch(error => console.error(error));
}

export const getAllDetailedForecast = (townID) => dispatch => {
	const detailedForecast = new TownDetailed({townID: townID});
	detailedForecast.$get()
    .then(result => {
    	dispatch({ type: 'TOWN', payload: result });
    })
    .catch(error => console.error(error));
}
