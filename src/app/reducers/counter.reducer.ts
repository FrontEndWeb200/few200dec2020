import { Action } from '@ngrx/store';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};


export function reducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'reset': {
      return initialState;
    }
    case 'increment': {

      return {
        count: state.count + 1
      };
    }
    case 'decrement': {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
}




