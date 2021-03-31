import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';





export default function NewUser(props) {
 let history = useHistory()


    const { register, handleSubmit, errors } = useForm({
        
     
    });

  const initialFormState = { id: null, firstName: "", lastName: "" ,email:"", role:"", password:"", password2:"" };

  const [user, setUser] = useState(initialFormState);
   
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
    console.log(event)
      event.preventDefault();
     
   
  };

 let reg = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;


const onSubmit=(event) => {
    console.log(event)
    handleSubmit()
    
       if(user.firstName!="" && user.lastName!="" &&user.email!="" &&user.role!="" && user.password.match(reg) && user.password2.match(reg) && user.password===user.password2){
           handleInputChange(event)
            addUser(user)
            setUser(initialFormState);
            history.push("/")
      }
    
     
   
  }

  


 

  
 
  const addUser = (user) => {
      console.log(user)
      
    user.id = props.users.length + 1
    props.setUsers([...props.users, user])
  
  }

  return ( <form onSubmit={handleSubmit(onSubmit)}>
    <div className="containerNewUser">
      <div className="saveAdd">
        <div className="btnreturn">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button>
              <ArrowBackIcon className="btnEdit"/>
            </Button>
          </Link>
          <h2>Add new user</h2>
        </div>

        <div>
          <Button className="btnSave" type="submit" 
           onClick={onSubmit} 
          >save and add</Button>
        </div>
      </div>

      <div className="formUser">
        <h3 className="UsInfo">User information</h3>

       

            <div className="Form1">

            <label className="labelForm"><p className="titleForm">FIRST NAME</p>
          <input 
            className="InputForm"
            value={user.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            type="text"
            name="firstName"
            ref={register({required: true, minLength:2})}
             />
              {errors.firstName && (<span className="errorInput">this field is invalid</span>)}
         
         
          </label>
               
                
          <label className="labelForm"><p className="titleForm">LAST NAME</p>
          <input
            className="InputForm"
            value={user.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
            type="text"
            name="lastName"
            ref={register({required: true, minLength:2})}
          />
          {errors.lastName && (<span className="errorInput" >this field is invalid</span>)}
          </label>

            <label className="labelForm"><p className="titleForm"> EMAIL</p>
          <input
            className="InputForm"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email address"
            type="email"
            name="email"
            ref={register({required: true, minLength:2, pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}})}
          />
          {errors.email && (<span className="errorInput">this field is invalid</span>)}
          </label>

            <label className="labelForm"> <p className="titleForm">ROLE </p>
                <select name="role" value={user.role} className="InputForm" onChange={handleInputChange} ref={register({required: true})}>
                
                    <option value="">select role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Regular user">Regular user</option>
                </select> {errors.role && (<span className="errorInput">this field is invalid</span>)}</label>

            </div>

    
            <h2 className="UsInfo" >Password</h2>
            <p className="UsInfo"> Password must contain at least 8 characters including :<br/> 
            1 Capital / 1 number / 1 special special characters </p>
            <div className="Form2"> 
            <label className="labelForm"> <p className="titleForm">PASSWORD</p>
                <input
                    className="InputForm"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    ref={register({required: true, minLength:8, pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/}})}
                />
                {errors.password && (<span className="errorInput">this field is invalid</span>)}
                </label>

                <label className="labelForm"> <p className="titleForm"> CONFIRM PASSWORD </p>
                <input
                    className="InputForm"
                    value={user.password2}
                    onChange={handleInputChange}
                    placeholder="Password"
                    type="password"
                    name="password2"
                    ref={register({required: true, minLength:8, pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/}})}
                />
                {errors.password2 && (<span className="errorInput">this field is invalid</span>)}
                </label>
      </div>
       

        <div></div>
      </div>
    
    </div> </form>
  );
}
