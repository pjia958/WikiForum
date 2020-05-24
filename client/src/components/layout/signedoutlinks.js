import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const navLinks = [
    {
        title: 'Sign up',
        path: '/signup_page'
    },
    {
        title: 'Login',
        path: '/login_page'
    }
]

export default function SignedoutNav({user}){
    const [menuActive, setMenuActive] = useState(false)

    return (
            <div className={`menu-content-container ${menuActive && 'active'}`}>  
                <ul>
                    { navLinks.map((link, index)=> (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        
    )
}