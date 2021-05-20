import { createStore } from 'redux';

const defaultState = {
    firstName: '111',
    lastName: '2222',
}

function nameReducer(state = defaultState, action) {
    const { type, payload } = action
    switch (type) {
        case "first":
            return { ...state, firstName: payload };
        case "last":
            return { ...state, lastName: payload };
        default:
            return state;
    }
}

const nameStore = createStore(nameReducer);

nameStore.subscribe(() => {
    console.log(nameStore.getState());
})

export default nameStore;