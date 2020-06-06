import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
//import { currentUser } from '../../api/authmanagement'
const navLinks = [
    {
        title: 'New Article',
        path: '/createarticle_page'
    },
    {
        title: 'Log out',
        path: '/logout_page'
    },

]
var lastName = 'Hi guest~'
var firstName = '' 

if(localStorage.ifLogged === 'Y'){
    firstName = localStorage.getItem('firstName')
    lastName= localStorage.getItem('lastName')
}

export default function SignedinNav(user){
    const [menuActive, setMenuActive] = useState(false)
    //console.log('currentUser: ',currentUser)
    return (
            <div className={`menu-content-container ${menuActive && 'active'}`}>  
                <ul>
                    { navLinks.map((link, index)=> (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38}/>
                        <span className="menu-avatar-name">{`${firstName} ${lastName}`}</span>
                </span>
                {/* responsive component */}
                {/* <i className="ionicons icon ion-ios-menu" onClick={()=>setMenuActive(!menuActive)}/> */}
            </div>
    )
}