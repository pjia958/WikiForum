import React from 'react'
// import {showMsg} from '../api/index'
const spanGreeting = document.querySelector("#showmsg");

function showMsg() {
    return fetch("http://localhost:10001/api/").then(response => response.json())
    .then(json => spanGreeting.innerHTML = json.message);
}

export default function Home(){
    return (
        <section className="container home">hello
        <button type="button" id="btnShowMsg" onClick={()=>showMsg()}>show msg</button>
        <span id="showmsg"></span>
        </section>
    )
}
