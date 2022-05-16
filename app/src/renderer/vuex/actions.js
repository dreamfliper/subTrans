import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const showclicked = ({ commit },index) => {
  commit(types.CHANGE_SELECTED, index)
  console.log(index, 'selected')
  commit(types.TOGGLE_SHOW_MODAL)
}
