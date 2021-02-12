import {QuestionType,UsefulQuestion} from './../Types/quiz_types'

const shuffleArray = (array:any[])=>
[...array].sort(()=>Math.random()-0.5)


export const getQuestions = async (amount:number,difficulty:string)=> {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    let {results} = await res.json();
    const quiz:UsefulQuestion[] = results.map((questObj:QuestionType,ind:number)=>{
        return{
            question:questObj.question,
            options:shuffleArray(questObj.incorrect_answers.concat(questObj.correct_answer)),
            answer:questObj.correct_answer
        }
    })
    return quiz
}