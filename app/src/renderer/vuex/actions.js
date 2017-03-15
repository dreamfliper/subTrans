import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const showclicked = ({ commit },index) => {
  commit(types.CHANGE_SELECTED,index)
  commit(types.TOGGLE_SHOWMODAL)
}