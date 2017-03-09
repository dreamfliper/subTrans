document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  ev.preventDefault()
  for(var index in ev.dataTransfer.files){
    if (index !== 'length' && index!=='item') {
      // store.files.push(
      //   {name:ev.dataTransfer.files[index].name,
      //     add:ev.dataTransfer.files[index].path,
      //    text:''})
      getAsText(ev.dataTransfer.files[index])
      console.log('file'+index+'finished')
    }
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
  console.log(evt.currentTarget.result)
  // store.files[totalfiles].text=evt.currentTarget.result
  // totalfiles++
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
    // The file could not be read
    console.log(evt.target.error)
  }
}