export const mainCounter		= state => state.counters.main
export const getMode				= state => state.counters.mode
export const getEncode			= state => state.counters.encode
export const getpFlag				= state => state.counters.pFlag
export const getshowModal		= state => state.counters.showModal
export const getSelected		= state => state.counters.selected
export const getFiles				= state => state.counters.files
export const getFileAmount	= state => state.counters.files.length
export const getFileName		= (state, getters) => state.counters.files[getters.getSelected].name
export const getContent			= (state, getters) => state.counters.files[getters.getSelected].content
