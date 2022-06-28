import cat1 from './img/cat1.png';
import cat2 from './img/cat2.png';
import questions from './db/questions.json';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [allQuestions, setAllQuestions] = useState(null);
  const [question, setQuestion] = useState('');
  const [cont, setCont] = useState(0);
  const [id, setID] = useState(0);

 
  function getQuestion() {  
    if (cont < allQuestions.length) {
      var index = Math.floor(Math.random() * allQuestions.length);
      while (allQuestions[index].read) {
        index = Math.floor(Math.random() * allQuestions.length);
      }
      allQuestions[index].read = true;
      setQuestion(allQuestions[index].question); 
      setID(index);  
      setCont(cont + 1);
    } else {
        setQuestion("No more questions :c")
    }
  }  

  useEffect(() => {
    const data = Object.values(questions);
    setAllQuestions(data);
    
    const index = Math.floor(Math.random() * data.length);
    setQuestion(data[index].question);  
    setID(index);

  }, [setAllQuestions, setQuestion])


  return (
    <div className="main">
      <div className='cat-header'>
        <img src={cat1} className="App-logo" alt="logo" />
        <img src={cat2} className="App-logo" alt="logo" />
      </div>
      
      <div className='question-container'>
        <h1>{id}</h1>
        <p>{question}</p>
        <button className='next-question-btn' onClick={getQuestion}>Next question :D</button>
      </div>
    </div>
  );
}

export default App;
