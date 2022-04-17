import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'


function App() {
  const [userList, setUsersList] = React.useState([])

  const addUserHandler = (uName, uAge) => {
      setUsersList(prevState => {
        return [...prevState, {name: uName, age: uAge, id: Math.random().toString() }]
      })
  }
  return (
    <>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={userList} />
    </>
  );
}

export default App;
