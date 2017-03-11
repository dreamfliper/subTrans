export const mainCounter 	= state => state.counters.main
export const getMode 		= state => state.counters.mode
export const getpflag 		= state => state.counters.pflag
export const getFileAmount  = state => state.counters.files.length
export const getFiles  		= state => state.counters.files
export const getContent 	= (state,index) => state.counters.files[index].content