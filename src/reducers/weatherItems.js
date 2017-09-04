const initialState = [];

export default function displayedItems(state = initialState, action) {
  switch(action.type) {
  	case 'DEFAULT':
  		return [
	  		action.payload
	  		];
  		break;
  }
  return state;
}