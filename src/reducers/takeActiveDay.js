const initialState = [];

export default function getChoosenDate(state = initialState, action) {
  switch(action.type) {
  	case 'ACTIVE':
  		return [
	  		action.payload,
	  		];
  		break;
  }
  return state;
}