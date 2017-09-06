const initialState = [];

export default function takeRegionsList(state = initialState, action) {
  switch(action.type) {
  	case 'REGIONS':
  		return [
	  		action.payload
	  		];
  		break;
  }
  return state;
}