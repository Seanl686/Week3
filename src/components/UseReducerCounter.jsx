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
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>useReducer counter example</h2>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    );
};