const initialState = [];

export default function takeFilterValue(state = initialState, action) {
  switch(action.type) {
  	case 'FILTER_VALUE':
  		return [
	  		action.payload
	  		];
  		break;
  }
  return state;
}