import { mapGetters, mapMutations } from 'vuex'
import { listen } from '@tauri-apps/api/event'
import { readBinaryFile } from '@tauri-apps/api/fs'
import store from './vuex/store'
import iconv from 'iconv-lite'

mapMutations([
  'DECREMENT_MAIN_COUNTER',
  'INCREMENT_MAIN_COUNTER',
  'CHANGE_MODE',
  'TOGGLE_PFLAG',
  'ADD_FILE',
  'CHANGE_SELECTED',
  'REMOVE_FILE',
  'REMOVE_ALL_FILE',
  'UPDATE_CONTENT',
])
mapGetters([
  'getFiles',
  'getFileName',
  'mainCounter',
  'getMode',
  'getEncode',
  'getpFlag',
  'getFileAmount',
  'getFiles',
  'getContent',
])

listen('tauri://file-drop', event => {
  console.log(event)
  Promise.all(event.payload.map(path => readBinaryFile(path)))
    .then(buffers => buffers.map(buffer => iconv.decode(buffer, store.getters.getEncode)))
    .then(textList => {
      textList.forEach((content, index) => {
        const add = event.payload[index]
        const name = add.split('/')[add.split('/').length - 1]
        store.commit('INCREMENT_MAIN_COUNTER')
        store.commit('ADD_FILE', { index, name, add, content })
        console.info('file ' + index + ' finished', index, name, add)
      })
    })
    .catch(console.error)
})


document.ondragover = event => {
  event.preventDefault()
}

document.ondragenter = event => {
  event.preventDefault()
  if (event.target.id === 'dropzone') {
    event.target.style.border = 'solid'
    event.target.innerHTML = '放開滑鼠'
  }
}

document.ondragleave = event => {
  event.preventDefault()
  if (event.target.id === 'dropzone') {
    event.target.style.border = ''
    event.target.innerHTML = '拖曳檔案到此處'
  }
}
