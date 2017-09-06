const initialState = [];

export default function takeTownsList(state = initialState, action) {
  switch(action.type) {
  	case 'TOWNS':
  		return [
	  		action.payload
	  		];
  		break;
  }
  return state;
}