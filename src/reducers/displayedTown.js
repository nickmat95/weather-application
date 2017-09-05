const initialState = [];

export default function getChoosenTown(state = initialState, action) {
  switch(action.type) {
  	case 'TOWN':
  		return [
	  		action.payload,
	  		action.payload.weekForecast[0],
	  		action.payload.weekForecast
	  		];
  		break;
  }
  return state;
}