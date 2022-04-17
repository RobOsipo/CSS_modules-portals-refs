import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    // refs
    const nameInputRef = React.useRef()
    const ageInputRef = React.useRef()
    // state
    const [error, setError] = React.useState()

    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        // ? When I add a + in front of a variable it makes sure its a number? need to research
        if (+enteredUserAge < 1 || !enteredUserAge || !enteredName) {
           setError({
               title: 'Invalid Input',
               message: 'Please enter a valid name and age (non-empty).'
           })
            return;
        }

        
        props.onAddUser(enteredName, enteredUserAge)
//! Normally I dont want to manipulate the DOM directly from inside React, but in the case of resetting an input its ok
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        
    }

  

    const errorHandler = () => {
        setError(null)
    }


  return (
    <div>
        
        { error && <ErrorModal onClick={errorHandler} title={error.title} message={error.message} />}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={nameInputRef} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" ref={ageInputRef} />

                <Button type="submit">Add User</Button>
            </form>
         </Card>
    </div>
  )
}

export default AddUser