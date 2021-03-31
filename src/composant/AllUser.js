import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CardUser from './CardUser'
import Input from '../../../nigthbornexo1z/node_modules/@material-ui/core/Input';
import Button from '../../../nigthbornexo1z/node_modules/@material-ui/core/Button';
import AddIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/Add';
import SearchIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/Search';
import NewUser from './NewUser'
import User from '../index.js'



export default function AllUser(props){

 
 


 
    return(
        <div className="containerUsers">
            
            <h2 className="titleUser">Our Users</h2>
            <div className="shearAdd">
                <div className="inputUser">
              {<SearchIcon className="btnsearch"/>}
                    <Input disableUnderline={true}
                    placeholder="Search for a user"  
                    style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none'}}
                    />
                </div>

                <div className="AddUser">
                   <Link to="/NewUser" style={{ textDecoration: 'none', color: 'black'}}> <Button
                        startIcon={<AddIcon className="btnAdd"/>}
                        color="primary"
                        > <p className="PNewUser">add new user</p></Button></Link>
                       
                </div>
                
            </div>

            <div className="allUser">
            
                   
                    

                        < CardUser  users={props.users} editRow={props.editRow} />
                     
                        
                   
              
            </div>
         
        </div>
    )
}