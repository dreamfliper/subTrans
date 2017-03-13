export const mainCounter 	= state => state.counters.main
export const getMode 		= state => state.counters.mode
export const getpflag 		= state => state.counters.pflag
export const getFileAmount  = state => state.counters.files.length
export const getFiles  		= state => state.counters.files
export const getFileName  		= (state, getters) => state.counters.files[getters.getSelected].name
export const getSelected 	= state => state.counters.selected
export const getContent 	= (state, getters) => state.counters.files[getters.getSelected].content