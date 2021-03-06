import * as types from '../mutation-types'
import OpenCC from 'opencc'
import fs from 'fs'
import iconv from'iconv-lite'


const state = {
  main: -1,
  selected: 0,
  mode: 's2tw',
  encode: 'UTF-8',
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
    state.files.push({
      index:'',
      name :'',
      add  :'',
      content:''
    })
  },
  [types.CHANGE_MODE] (state) {
    state.mode = (state.mode === 's2tw') ? 'tw2s':'s2tw'
  },
  [types.SET_ENCODE] (state, encode) {
    state.encode = encode
  },
  [types.RELOAD_FILE] (state, encode) {
    state.files
      .map(file => fs.readFileSync(file.add))
      .map(buffer => iconv.decode(buffer, state.encode))
      .forEach((newContent, index) => state.files[index].content = newContent)
  },
  [types.TOGGLE_PFLAG] (state) {
    state.pflag = !state.pflag
  },
  [types.TOGGLE_SHOWMODAL] (state) {
    state.showmodal = !state.showmodal
  },
  [types.ADD_FILE] (state, payload) {
    Object.keys(payload).map( property => 
      state.files[payload.index][property] = payload[property]
    )
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
  [types.SAVE_ALL_FILES] (state) {
    state.files.map( file => {
      let tmode = state.pflag ? state.mode+'p':state.mode
      let opencc = new OpenCC(tmode+".json")
      fs.writeFile(file.add, opencc.convertSync(file.content), err => 
        console.log(err ? err : 'The file was translated and saved!')
      );
    })
    state.files.splice(0, state.files.length)
    state.main = -1
  }
}

export default {
  state,
  mutations
}