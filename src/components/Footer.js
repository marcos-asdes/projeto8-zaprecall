export default function Footer({sequenceUserAnswer}) {
    let count = 0;
    (sequenceUserAnswer.length !== 0) ? count = (sequenceUserAnswer.length) : (count = 0)
    if (count === 8){
        return (
            <div className="Footer">
                <FooterCompleted sequenceUserAnswer={sequenceUserAnswer}/>
            </div>
            )
    } else {
        return (
            <div className="Footer">
                <FooterInProgress sequenceUserAnswer={sequenceUserAnswer} count={count}/>
            </div>
        )
    }
}

function FooterInProgress({count, sequenceUserAnswer}){
    return (
        <div className="InProgress">
            <p>{count}/8 CONCLUÍDOS</p>
            <div>
                {
                sequenceUserAnswer.map( (UserAnswer, index) => {
                return <img key={index} src={UserAnswer} alt={UserAnswer} />
                })
                }
            </div>
        </div>
    )
}

function FooterCompleted({sequenceUserAnswer}){
    let finalMsg = "";
    let finalImg = "";
    let finalImgTxt = "";
    const GreenCount = sequenceUserAnswer.filter(UserAnswer => UserAnswer==="../assets/images/green.png");
    const YellowCount = sequenceUserAnswer.filter(UserAnswer => UserAnswer==="../assets/images/yellow.png");
    if((GreenCount.length+YellowCount.length) === 8){
        finalMsg = "Você não esqueceu de nenhum flashcard!"
        finalImg = "../assets/images/party.png";
        finalImgTxt = "Parabéns!"
    } else {
        finalMsg = "Ainda faltam alguns... Mas não desanime!";
        finalImg = "../assets/images/sad.png";
        finalImgTxt = "Putz..."
    }
    return (
        <div className="Completed">
            <div className="finalEmoticon">
                <img src={finalImg} alt={finalImg} />
                <p>{finalImgTxt}</p>
            </div>
            <p>{finalMsg}</p>
            <p>8/8 CONCLUÍDOS</p>
            <div>
                {
                sequenceUserAnswer.map( (UserAnswer, index) => {
                return <img key={index} src={UserAnswer} alt={UserAnswer} />
                })
                }
            </div>
        </div>
    )
}