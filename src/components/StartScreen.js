import React from "react";

export default function StartScreen() {
    const [hidden,setHidden] = React.useState(false);
    return (
        <div className="StartScreen" style={{display: hidden ? 'none' : 'flex'}}>
            <StartLogo />
            <StartRecallButton setHidden={setHidden}/>
        </div>
    )
}

function StartLogo() {
    return (
        <div className="StartLogo">
            <img src="../assets/images/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
    )
}

function StartRecallButton({setHidden}) {
    const startRecallButtonTxt = "Iniciar Recall";
    return (
        <div className="StartRecallButton">
            <button onClick={() => setHidden(true)}>{startRecallButtonTxt}</button>
        </div>
    )
}