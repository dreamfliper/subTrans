export const mainCounter = state => state.counters.main
export const getMode = state => state.counters.mode
export const getpflag = state => state.counters.pflag
export const getFileAmount = state => state.counter.files.length
export const getContent = (state,index) => state.counter.files[index].content