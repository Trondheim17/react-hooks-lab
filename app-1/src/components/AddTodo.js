import React, { useState } from 'react'

const AddTodo = (props) => {
    const [userInput, setUserinput] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        props.addTodo(userInput)
        setUserinput('')
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input
                placeholder='Add todo'
                value={userInput}
                onChange={(e) => setUserinput(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddTodo 