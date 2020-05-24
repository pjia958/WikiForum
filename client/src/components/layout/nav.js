import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
import SignedinNav from './signedinlinks'
import SignedoutNav from './signedoutlinks'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    }
]

export default function Nav({user}){
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="navigationbar white">
            <span className="menu-title">~WikiForum~</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>  
                <ul>
                    { navLinks.map((link, index)=> (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                    <SignedoutNav />
                    <SignedinNav />
                </ul>
            </div>
        </nav> 
    )
}