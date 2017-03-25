import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log(`Action Recieved:`,  action);

  switch (action.type) {
    case FETCH_WEATHER:
      // NO! do not mutate existing state
      // return state.push(action.payload.data);

      // return [].concat(state, [ action.payload.data ]);

      // Using ES6
      return [ action.payload.data, ...state ];
  }

  return state;
}
