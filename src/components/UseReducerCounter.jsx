import * as React from 'react';
import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export const UseReducerCounter = () => {

    return (
        <>
        <h2>useReducer counter example</h2>
        <h1>0</h1>
        <button>increase</button>
        <button>decrease</button>
        <button>reset</button>
        </>
    )
}