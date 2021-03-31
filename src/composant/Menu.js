import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../nigthbornexo1z/node_modules/@material-ui/core/Button';
import PeopleAltOutlinedIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/PeopleAltOutlined';
import PersonOutlineOutlinedIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/PersonOutlineOutlined';
import SettingsIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/Settings';
import MonetizationOnIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/MonetizationOn';
import ExitToAppIcon from '../../../nigthbornexo1z/node_modules/@material-ui/icons/ExitToApp';
import NB from '../assets/NB.png'
import clients from '../assets/clients.png'
import User from '../assets/User.png'
import Settings from '../assets/Settings.png'
import Money from '../assets/Money.png'
import SignOut from '../assets/SignOut.png'
export default function Menu(){


    return(
        <div>
           

        <div className="containerMenu">

            <div className="Menu1">
                 <Link to="/" style={{ textDecoration: 'none', color: 'black'}}> 
        <Button> <img src={NB} alt="Logo" /></Button></Link>


            <Button className="BtnMenu"> 
            <img src={clients} alt="Logo" />
            </Button>
            
           <Link to="/" style={{ textDecoration: 'none', color: 'black'}} > <Button className="BtnMenuUser">
           <img src={User} alt="Logo" /> 
            </Button></Link>

            <Button className="BtnMenu">
            <img src={Settings} alt="Logo" /> 
            </Button>

            <Button className="BtnMenu" >
            <img src={Money} alt="Logo" /> 
            </Button>

            </div>

       
        <div className="Menu2">
              <Button className="BtnMenu">
              <img src={SignOut} alt="Logo" />     
              </Button>
        </div>
          
        
        </div>
        </div>
    )
}