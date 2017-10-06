import {mapGetters, mapState, mapMutations} from 'vuex'
import store from 'renderer/vuex/store'

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
	'getpflag',
	'getFileAmount',
	'getFiles',
	'getContent'
])

document.ondragover = document.ondrop = (ev) => {
	ev.preventDefault()
}

document.body.ondrop = (ev) => {
	ev.preventDefault()
	let previousBase = store.getters.mainCounter+1
	for(let index of ev.dataTransfer.files){
		store.commit('INCREMENT_MAIN_COUNTER')
	}
	for(let index in ev.dataTransfer.files){
		if (index !== 'length' && index!=='item') {
			getAsText(ev.dataTransfer.files[index], previousBase+Number(index))
				.then(resolve=>{
					store.commit(
						'ADD_FILE',{
							index:resolve.index,
							name :resolve.name,
							add  :resolve.path,
							content:resolve.content
						})
					console.info('file '+resolve.index+' finished')
					console.log(store.getters.mainCounter)
				})
				.catch(err=>console.log(err))
		}
	}
}

document.ondragenter = (ev) =>{
	if (event.target.id==='dropzone') {	
		event.target.style.border = "solid";
		event.target.innerHTML = "放開滑鼠";
	}	
}

document.ondragleave = (ev) =>{
	if (event.target.id==='dropzone') {	
		event.target.style.border = "";
		event.target.innerHTML = "拖曳檔案到此處";
	}
}

function getAsText(readFile, index) {
	return new Promise((resolve,reject) => {
		let filebuffer = new FileReader()
		filebuffer.readAsText(readFile, store.getters.getEncode)
		filebuffer.onload = () => resolve({
			content:filebuffer.result,
			index:index,
			name:readFile.name,
			path:readFile.path
		})
		filebuffer.onerror = reject
	})
}
