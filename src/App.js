import cat1 from './img/cat1.png';
import cat2 from './img/cat2.png';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className='cat-header'>
        <img src={cat1} className="App-logo" alt="logo" />
        <img src={cat2} className="App-logo" alt="logo" />
      </div>
      
      <div className='question-container'>
        <p>Do you love working from home or would you rather be in the office? Is there a balance of both that you like best? </p>
        <button className='next-question-btn'>Siguiente pregunta :)</button>
      </div>
    </div>
  );
}

export default App;
