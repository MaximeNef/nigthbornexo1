
import React, {useState} from "react";
import ReactDOM from "react-dom";
import "../assets/css/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Menu from "./Menu"
import AllUser from "./AllUser"
import NewUser from "./NewUser"
import EditUser from "./EditUser";



export default function App(props) {

  const usersData = [
    {id: 1, firstName:"David", lastName:"Leclerq", email:"test@gmail.com",role:"Administrator", password:"Nightborn1!", password2:"Nightborn1!"},
    {id: 2, firstName:"Matthieu", lastName:"Bocquet", email:"test@gmail.com",role:"Administrator", password:"Nightborn1!", password2:"Nightborn1!"},
    {id: 3, firstName:"sharon", lastName:"Dupont", email:"test@gmail.com",role:"Regular user", password:"Nightborn1!", password2:"Nightborn1!"},
    {id: 4, firstName:"Lisa", lastName:"De Groof", email:"test@gmail.com",role:"Regular user", password:"Nightborn1!", password2:"Nightborn1!"},
]
  const [users, setUsers] = useState(usersData)


  
  const initialFormState = { id: null, firstName: '', lastName: '', email:'', role:'',password:'', password2:'' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

 

 const editRow = (user) => {

console.log(user.firstName)
  setCurrentUser({ id: user.id, firstName: user.firstName, lastName:user.lastName, email:user.email, role:user.role,password:user.password, password2:user.password2})
}

const updateUser = (id, updatedUser) => {
 

  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
 }


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Route exact path="/" render={ props => < AllUser users={users} editRow={editRow}  setUsers={setUsers} />} />
        <Route
          exact
          path="/NewUser"
          render={props => <NewUser users={users} setUsers={setUsers}/>}
        />
        <Route
          exact
          path="/EditUser"
          render={props => <EditUser users={users} setUsers={setUsers} updateUser={updateUser} editRow={editRow} currentUser={currentUser}/>}
        />
      </BrowserRouter>
    </>
  );
}

