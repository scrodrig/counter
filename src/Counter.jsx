import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>You have clicked {counter} times</p>
            <button onClick={() => { setCounter(counter + 1) }}>Add</button>
        </div>
    )
}

export default Counter