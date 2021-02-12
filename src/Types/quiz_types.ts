import React from 'react';

export type QuestionType={
    category: string
    ​​​
    correct_answer: string
    ​​​
    difficulty: string
    ​​​
    incorrect_answers: string[]
    ​​​
    question: string
    ​​​
    type: string
}

export type UsefulQuestion={
    question:string
    options:string[]
    answer:string
}

export type PropsTypeQD={
    question:string
    options:string[]
    callback:(e:React.FormEvent<EventTarget>,selectedAns:string)=>void
    questionNo:number
    totalQuestions:number
}