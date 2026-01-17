/**
 * A Counter compoenet that decrements, increments,
 * and resets a number using the 'useState' hook in React
 */

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // Increment function
    // const increment = () => {
    //     return(
    //         // Increment count using previous state by
    //         // using the functional form of the state updater.
    //         setCount(prev => prev + 1)
    //     );
    // }

    // const decrement = () => {
    //      setCount(prev => prev - 1)
    // };

    // const reset = () => {
    //     setCount(0)
    // };

    return (
        <div>
            <p>Count { count }</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    )
}

export default Counter;