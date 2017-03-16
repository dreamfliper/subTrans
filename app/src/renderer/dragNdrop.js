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
	for(let index in ev.dataTransfer.files){
		if (index !== 'length' && index!=='item') {
			store.commit('ADD_FILE',{
				index:Number(store.getters.mainCounter)+Number(index)+1,
				name :ev.dataTransfer.files[index].name,
				add  :ev.dataTransfer.files[index].path,
				content:'.'})
			getAsText(ev.dataTransfer.files[index])
			console.info('file '+index+' finished')
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

function getAsText(readFile) {
	var filebuffer = new FileReader()
	filebuffer.readAsText(readFile)

	// Handle progress, success, and errors
	filebuffer.onprogress = updateProgress
	filebuffer.onload = loaded
	filebuffer.onerror = errorHandler
}

function updateProgress(evt) {
	if (evt.lengthComputable) {
		// evt.loaded and evt.total are ProgressEvent properties
		var loaded = (evt.loaded / evt.total)
		if (loaded < 1) {
			// Increase the prog bar length
			style.width = (loaded * 200) + "px"
		}
	}
}

function loaded(evt) {
	store.commit('INCREMENT_MAIN_COUNTER')
	store.commit('UPDATE_CONTENT',evt.currentTarget.result)
	console.debug(store.getters.mainCounter)
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		// The file could not be read
		console.error(evt.target.error)
	}
}