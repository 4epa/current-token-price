import { getCurrentCoinBpi } from '../pages/api/api'

const SET_LAST_TIME_UPDATE = 'SET_LAST_TIME_UPDATE';
const SET_BPI = 'SET_BPI';

export const setLastTimeUpdate = (time) => {
  return {
    type: SET_LAST_TIME_UPDATE,
    time
  }
}

export const setBpi = (bpi) => {
  return {
    type: SET_BPI,
    bpi
  }
}

const initialState = {
  timeLastUpdate: null,
  bpi: {}
}

const coinPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_TIME_UPDATE:
      return {
        ...state,
        timeLastUpdate: action.time
      }
    case SET_BPI:
      return {
        ...state,
        bpi: action.bpi
      }
    default:
      return state
  }
}

export default coinPriceReducer;