import React from 'react';

export default function FlashCard({questionNumber, question, answer, sequenceUserAnswer, setSequenceUserAnswer}) {
    const [openQuestion,setOpenQuestion] = React.useState(false);
    const [flip, setFlip] = React.useState(false);
    const [userAnswer, setUserAnswer] = React.useState("");
    let questionStatusImg = "";
    return (
        <div className="FlashCard">
            <FlashCardQuestionNumberFace questionNumber={questionNumber} openQuestion={openQuestion} setOpenQuestion={setOpenQuestion}/>
            <FlashCardFrontFace question={question} openQuestion={openQuestion} flip={flip} setFlip={setFlip}/>
            <FlashCardBackFace answer={answer} openQuestion={openQuestion} flip={flip} userAnswer={userAnswer} setUserAnswer={setUserAnswer} sequenceUserAnswer={sequenceUserAnswer} setSequenceUserAnswer={setSequenceUserAnswer}/>
            <FlashCardFinalStatus questionNumber={questionNumber} setSequenceUserAnswer={setSequenceUserAnswer} questionStatusImg={questionStatusImg} openQuestion={openQuestion} flip={flip} userAnswer={userAnswer} />
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

function FlashCardBackFace({answer, openQuestion, flip, userAnswer, setUserAnswer, sequenceUserAnswer, setSequenceUserAnswer}) {
    const addItemRed = () => {
        setSequenceUserAnswer([...sequenceUserAnswer, "../assets/images/red.png"]);
        setUserAnswer("red");
    }
    const addItemYellow = () => {
        setSequenceUserAnswer([...sequenceUserAnswer, "../assets/images/yellow.png"]);
        setUserAnswer("yellow");
    }
    const addItemGreen = () => {
        setSequenceUserAnswer([...sequenceUserAnswer, "../assets/images/green.png"]);
        setUserAnswer("green");
    }
    return (
        <div className="backFace" style={{display: (openQuestion && flip && (userAnswer==="")) ? 'flex' : 'none'}}>
            <p>{answer}</p>
            <div className="backFacebuttons">
                <button id="red" onClick={addItemRed}>Não lembrei</button>
                <button id="yellow" onClick={addItemYellow}>Quase não lembrei</button>
                <button id="green" onClick={addItemGreen}>Zap!</button>
            </div>
        </div>
    )
}

function FlashCardFinalStatus({questionNumber, userAnswer, questionStatusImg, openQuestion, flip}) {
    if (userAnswer==="red"){
        questionStatusImg = "../assets/images/red.png";
    } 
    else if (userAnswer==="yellow"){
        questionStatusImg = "../assets/images/yellow.png";
    }
    else if (userAnswer==="green"){
        questionStatusImg = "../assets/images/green.png";
    }
    else {
        questionStatusImg = "";
    }
    return (
        <div className="finalStatus" style={{display: (openQuestion && flip && (userAnswer!=="")) ? 'flex' : 'none'}}>
            <p style={{color: userAnswer}}>Pergunta {questionNumber}</p>
            <div className="finalStatusImg">
                <img src={questionStatusImg} alt="final status" />
            </div>
        </div>
    )
}
