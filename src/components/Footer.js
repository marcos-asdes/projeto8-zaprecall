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
            <p>{count}/8 Concluídos</p>
            <div className="emoticons">
                {
                sequenceUserAnswer.map( UserAnswer => {
                    return <img src={UserAnswer} alt={UserAnswer} />
                })
                }
            </div>
        </div>
    )
}

function FooterCompleted({sequenceUserAnswer}){
    return (
        <div className="Completed">
            <div className="emoticon"></div>
            <p></p>
            <p>8/8 Concluídos</p>
            <div className="emoticons">
                {
                sequenceUserAnswer.map( UserAnswer => {
                return <img src={UserAnswer} alt={UserAnswer} />
                })
                }
            </div>
        </div>
    )
}