import './App.css';
import React , { useState } from 'react';

function App() {

  let [calc, setCalc] = useState("");

  const Update = (e) => {
    setCalc(calc + e);
  }

  const Sin = () => {
    setCalc(Math.sin(calc));
  }

  const Cos = () => {
    setCalc(Math.cos(calc));
  }
  const Tan = () => {
    setCalc(Sin/Cos);
  }

  const Calculate = () => {
    try{ 
      setCalc(eval(calc).toString());
    }catch{
      setCalc("error");
    }  
  }

  const Delete = () => {
    setCalc(calc.toString().slice(0,-1));
  }

  const AllClear = () => {
    setCalc("");
  }
  
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Calculator</h1>
        <div className="App">
            <div className="calculator">
                <div className="result">{calc?calc:"0"}
                </div>
                <div className="operator">
                    <button onClick={Delete}>DEL</button>
                    <button onClick={Sin}>sin</button>
                    <button onClick={Cos}>cos</button>
                    <button onClick={Tan}>tan</button>
                    <button onClick={() => Update('+')}>+</button>
                </div>
                <div className="numbers">
                    <button onClick={() => Update('7')}>7</button>
                    <button onClick={() => Update('8')}>8</button>
                    <button onClick={() => Update('9')}>9</button>
                    <span className="operator"><button onClick={() => Update('-')}>-</button></span>
                </div>
                <div className="numbers">
                    <button onClick={() => Update('4')}>4</button>
                    <button onClick={() => Update('5')}>5</button>
                    <button onClick={() => Update('6')}>6</button>
                    <span className="operator"><button onClick={() => Update('*')}>*</button></span>
                </div>
                <div className="numbers">
                    <button onClick={() => Update('1')}>1</button>
                    <button onClick={() => Update('2')}>2</button>
                    <button onClick={() => Update('3')}>3</button>
                    <span className="operator"><button onClick={() => Update('/')}>/</button></span>
                </div>
                <div className="numbers">
                <span className="operator"><button onClick={AllClear}>AC</button></span>
                    <button onClick={() => Update('0')}>0</button>
                    <button onClick={() => Update('.')}>.</button>
                    <span className="operator"><button onClick={() => Calculate()}>=</button></span>
                </div>
            </div>  
        </div>
    </div>
  );
}

export default App;
