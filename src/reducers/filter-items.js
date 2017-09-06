const initialState = [];

export default function filterItems(state = initialState, action) {
  switch(action.type) {
  	case 'FILTER':
  		return [
	  		action.payload
	  		];
  		break;
  }
  return state;
}