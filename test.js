import test from 'ava';
import store from './app/src/renderer/vuex/modules/counters'

const {mutations} = store


test(t => {
    t.deepEqual([1, 2], [1, 2]);
});

test('DECREMENT_MAIN_COUNTER', t => {
	const state={main:0}
	const {DECREMENT_MAIN_COUNTER} = mutations
	DECREMENT_MAIN_COUNTER(state)
	t.is(state.main,-1)
});

test('INCREMENT_MAIN_COUNTER', t => {
	const state={main:0, files:[]}
	const {INCREMENT_MAIN_COUNTER} = mutations
	INCREMENT_MAIN_COUNTER(state)
	t.is(state.main,1)
	t.is(state.files.length,1)
	t.log(JSON.stringify(state.files[0]))
});

test('CHANGE_MODE', t => {
	const state={mode:'s2tw'}
	const {CHANGE_MODE} = mutations
	CHANGE_MODE(state)
	t.is(state.mode,'tw2s')
	CHANGE_MODE(state)
	t.is(state.mode,'s2tw')
});

test('TOGGLE_PFLAG', t => {
	const state={pflag:false}
	const {TOGGLE_PFLAG} = mutations
	TOGGLE_PFLAG(state)
	t.true(state.pflag)
	TOGGLE_PFLAG(state)
	t.false(state.pflag)
});

test('REMOVE_FILE', t => {
	const index=0, state={ files: [
    { index:0 ,name: 'Learn JavaScript' ,add: 'sample1',content:'sample1'},
    { index:1 ,name: 'Learn Vue' ,add:'sample2',content:'sample2'},
  ]}
	const {REMOVE_FILE} = mutations
	REMOVE_FILE(state, index)
	t.log(JSON.stringify(state.files))
	t.is(state.files.length, 1)
});

test('ADD_FILE', t => {
	const state={files:[]}, payload={index:0 ,name: 'Learn JavaScript' ,add: 'sample1',content:'sample1'}
	const {ADD_FILE, INCREMENT_MAIN_COUNTER} = mutations
	INCREMENT_MAIN_COUNTER(state)
	ADD_FILE(state, payload)
	t.deepEqual(state.files[0], payload)
});

