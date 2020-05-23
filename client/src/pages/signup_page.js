import React from 'react'
import {Signup} from '../components/signup'

export default function LoginPage(){
    return (
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <Signup />
        </div>
    </div>
    )
}

// export class LoginPage extends React.Component{
//     render(){
//         return(
//             <div className="row">
//                 <div className="col-md-4 col-md-offset-4">
//                     <Login />
//                 </div>
//             </div>
//         )
//     }
// }