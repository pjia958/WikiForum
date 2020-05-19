import React from 'react'

const spanGreeting = document.querySelector("#showmsg");

function fetchmsg() {
    fetch("/api/msg")
    .then(response => response.json())
    .then(json => spanGreeting.innerHTML = json.message);
}
export default function Home(){
    return (
        <section className="container home">hello
        <button type="button" id="btnShowMsg" onClick={fetchmsg()}>show msg</button>
        <span id="showmsg"></span>
        </section>
    )
}
