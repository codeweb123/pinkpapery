import React, { useState } from 'react';

const Counter = () => { 
    // declaring state variable and function to change value
    const [counter, setCounter] = useState(0)

    return(
        <>
        <button onClick={() => setCounter(counter + 1)}> Likes + </button>
        {counter}
        </>
    )

}

export default Counter;