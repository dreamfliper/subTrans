import * as types from '../mutation-types'

const state = {
  main: -1,
  selected: 0,
  mode: 's2tw',
  pflag: false,
  showmodal: false,
  files: [
    // { index:0 ,name: 'Learn JavaScript' ,add: 'sample1',content:'sample1'},
    // { index:1 ,name: 'Learn Vue' ,add:'sample2',content:'sample2'},
  ]
}

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main--
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main++
  },
  [types.CHANGE_MODE] (state) {
    state.mode=  state.mode==='s2tw' ? 'tw2s':'s2tw'
  },
  [types.TOGGLE_PFLAG] (state) {
    state.pflag = !state.pflag
  },
  [types.TOGGLE_SHOWMODAL] (state) {
    state.showmodal = !state.showmodal
  },
  [types.ADD_FILE] (state, payload) {
    state.files.push(payload)//payload{name:'',add:'',content:''}
  },
  [types.CHANGE_SELECTED] (state, index) {
    state.selected=index
  },
  [types.REMOVE_FILE] (state, index) {
    state.files.splice(index, 1)
  },
  [types.REMOVE_ALL_FILE] (state) {
    state.files.splice(0,state.files.length)
    state.main = -1
  },
  [types.UPDATE_CONTENT] (state, payloadstr) {
    state.files[state.main].content=payloadstr
  },
}

export default {
  state,
  mutations
}