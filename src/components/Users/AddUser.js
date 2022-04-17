import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = React.useState('')
    const [enteredAge, setEnteredAge] = React.useState('')
    const [error, setError] = React.useState()

    const addUserHandler = (e) => {
        e.preventDefault();

        // ? When I add a + in front of a variable it makes sure its a number? need to research
        if (+enteredAge < 1 || !enteredAge || !enteredUsername) {
           setError({
               title: 'Invalid Input',
               message: 'Please enter a valid name and age (non-empty).'
           })
            return;
        }

        
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
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
                <input value={enteredUsername} id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
         </Card>
         </div>
  )
}

export default AddUser