import React from 'react'
import ArrowForwardIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/ArrowForward';
import Button from '../../../nigthbornexo1z/node_modules/@material-ui/core/Button';
import {Link} from 'react-router-dom';


const CardUser = (props) => {
   
    
    return(

  
  <div className="allUser1">
   
    {props.users.length > 0 ? (
        props.users.map((user) => (
          <div className="CardUser" key={user.id}>
              <div className="UserNameRole"> 
            <h2 className="UserName"> {user.firstName} {user.lastName}</h2>
        
            <p className="UserRole">{user.role}</p>
            </div>
            <div className="LinkEdit">
            <Link to="/EditUser" style={{ textDecoration: 'none', color: 'black'}}>
              <Button   onClick={() => {
                 props.editRow(user)
  }} ><ArrowForwardIcon className="btnEdit"/></Button>
           </Link>
           </div>
          </div>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
   
  </div>  )
}

export default CardUser