import React, { useState } from 'react'
import { PropsTypeQD } from './../Types/quiz_types'

const QuestionCard: React.FC<PropsTypeQD> = ({ question, options, callback, questionNo, totalQuestions }) => {
    let [selectedAnswer, setSelectedAns] = useState("");
    // let [valueInput, setValueInput] = useState("Next");
    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
    }
    const html_string = question;

    // if(questionNo===(totalQuestions-1)){
    //     setValueInput("Finish");
    // }
    return (
        <div className="question-container">
            <div className="question-number">
                <u>QUESTION {questionNo + 1} OF {totalQuestions}</u>.
            </div>
            <div className="question" >
                <p className="question-display" dangerouslySetInnerHTML={{ __html: html_string }}></p>
            </div>
            <form className="question-form" onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAnswer)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        name="opt"
                                        value={opt}
                                        onChange={handleSelection}
                                        required
                                        checked={selectedAnswer === opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input value={(questionNo === (totalQuestions - 1)) ? "Finish" : "Next"} type="submit" className="submit" />
            </form>
        </div>
    )
}
export default QuestionCard;