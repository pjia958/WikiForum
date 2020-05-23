import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'WikiForum',
        path: '/wikiforum_page'
    },
    {
        title: 'Contact-Me',
        path: '/contact-me_page'
    },
    {
        title: 'Login',
        path: '/login_page'
    }
]

export default function Nav({user}){
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="navigationbar">
            <span className="menu-title">~WikiForum~</span>
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
                        <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                {/* responsive component */}
                <i className="ionicons icon ion-ios-menu" onClick={()=>setMenuActive(!menuActive)}/>
            </div>
        </nav> 
    )
}