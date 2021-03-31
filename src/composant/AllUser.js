import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CardUser from './CardUser'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';





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