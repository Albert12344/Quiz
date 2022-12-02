import React, {useState} from "react";
import { quizData } from './QuizData'
import './App.css';

function MainQuiz() {
const [count, setCount] = useState(0)
const [score, setScore] = useState(0)
const [end, setEnd] = useState(false)
const [undo, setUndo] = useState("")

const handleClick = option => () => {
  const currentQuestion = quizData[count];

  if (currentQuestion.answer == option) {
    setScore(currentScore => currentScore + 1);
  }

  if(count === quizData.length){
    setEnd(true)
    setUndo(undo)
  }else {
    setCount(count + 1)
  }

}
  function handleClick1() {
    if (count <= 8){
      setCount(currentCount => currentCount - currentCount)
      setScore(currentScore => currentScore = 0)
    }
  }

return (
  <div>
    <h1 id="past" >Page {count + 1}/{quizData.length}</h1>
    <h1 id="question" >{quizData[count].question}</h1>
    {quizData[count].options.map(option => (
      <button id="answer" key={option} onClick={handleClick(option)}>{option}</button>
    ))}
    <h1 id = "score" >Your Score is {score}</h1>
    <button  id="stop" onClick={handleClick1} >Reset</button>
  </div>  
)
}
export default MainQuiz;
