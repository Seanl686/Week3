import * as React from 'react';
import { useState } from 'react';

export const UseStateCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>useState counter example</h2>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
            <button onClick={() => setCount(0)}>reset</button>
        </>
    );
};