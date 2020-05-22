import React from 'react'
import { response } from 'express';
// import {showMsg} from '../api/index'
const spanGreeting = document.querySelector("#showmsg");

function showMsg() {
    return fetch("http://localhost:10001/api/msg").then(response => response.json())
    .then(json => spanGreeting.innerHTML = json.message);

    // return fetch("http://localhost:10001/api/msg").then(response=>response.json()).then(json=>console.log(json.message));
    //problem: can't access before spanGreeting initialization
}

export default function Home(){

    return (
        <section className="container home">hello
        <button type="button" id="btnShowMsg" onClick={()=>showMsg()}>show msg</button>
        <span id="showmsg">Here is span</span>
        </section>
    )
    }
