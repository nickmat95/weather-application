const initialState = [];

export default function getChoosenDate(state = initialState, action) {
  switch(action.type) {
  	case 'CHOOSEN_DATE':
  		return [
	  		action.payload,
	  		];
  		break;
  }
  return state;
}