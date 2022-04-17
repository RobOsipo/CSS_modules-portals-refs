import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = React.useState('')
    const [enteredAge, setEnteredAge] = React.useState('')

    const addUserHandler = (e) => {
        e.preventDefault();
        
        // ? When i add a + in front of a variable it makes sure its a number? need to research
        if (+enteredAge < 1 || !enteredAge || !enteredUsername) {return}

        
        console.log(enteredAge, enteredUsername)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

   


  return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUsername} id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
         </Card>
  )
}

export default AddUser