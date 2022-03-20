import React from 'react';

export default function FlashCard({questionNumber, question, answer, userAnswer}) {
    const [openQuestion,setOpenQuestion] = React.useState(false);
    const [flip, setFlip] = React.useState(false);
    const [usrAnswer, setUsrAnswer] = React.useState("");
    let questionStatusImg = "";
    return (
        <div className="FlashCard">
            <FlashCardQuestionNumberFace questionNumber={questionNumber} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion}/>
            <FlashCardFrontFace question={question} openQuestion={openQuestion} flip={flip} setFlip={setFlip}/>
            <FlashCardBackFace answer={answer} openQuestion={openQuestion} flip={flip} usrAnswer={usrAnswer} setUsrAnswer={setUsrAnswer}/>
            <FlashCardFinalStatus questionNumber={questionNumber} userAnswer={userAnswer} questionStatusImg={questionStatusImg} openQuestion={openQuestion} flip={flip} usrAnswer={usrAnswer} />
        </div>
    )
}

function FlashCardQuestionNumberFace({questionNumber, openQuestion, setOpenQuestion}) {
    return (
        <div className="questionNumberFace" style={{display: openQuestion ? 'none' : 'flex'}}>
            <p>Pergunta {questionNumber}</p>
            <div className="questionNumberButton" onClick={() => setOpenQuestion(true)}>
                <img src="../assets/images/seta.svg" alt="button" />
            </div>
        </div>
    )
}

function FlashCardFrontFace({question, openQuestion, flip, setFlip}) {
    return (
        <div className="frontFace" style={{display: (openQuestion && !flip) ? 'flex' : 'none'}}> 
            <p>{question}</p>
            <div className="frontFaceButton" onClick={() => setFlip(true)}>
                <img src="../assets/images/setinha.png" alt="button" />
            </div>
        </div>
    )
}

function FlashCardBackFace({answer, openQuestion, flip, usrAnswer, setUsrAnswer}) {
    return (
        <div className="backFace" style={{display: (openQuestion && flip && (usrAnswer==="")) ? 'flex' : 'none'}}>
            <p>{answer}</p>
            <div className="backFacebuttons">
                <button id="red" onClick={() => setUsrAnswer("red")}>Não lembrei</button>
                <button id="yellow" onClick={() => setUsrAnswer("yellow")}>Quase não lembrei</button>
                <button id="green" onClick={() => setUsrAnswer("green")}>Zap!</button>
            </div>
        </div>
    )
}

function FlashCardFinalStatus({questionNumber, usrAnswer, questionStatusImg, openQuestion, flip, userAnswer}) {
    if (usrAnswer==="red"){
        questionStatusImg = "../assets/images/red.png";
        userAnswer = "red";
    } 
    else if (usrAnswer==="yellow"){
        questionStatusImg = "../assets/images/yellow.png";
        userAnswer = "orange";
    }
    else if (usrAnswer==="green"){
        questionStatusImg = "../assets/images/green.png";
        userAnswer = "green";
    }
    else {
        questionStatusImg = "";
    }
    return (
        <div className="finalStatus" style={{display: (openQuestion && flip && (usrAnswer!=="")) ? 'flex' : 'none'}}>
            <p style={{color: userAnswer}}>Pergunta {questionNumber}</p>
            <div className="finalStatusImg">
                <img src={questionStatusImg} alt="final status" />
            </div>
        </div>
    )
}
