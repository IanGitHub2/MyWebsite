import React, { useState } from "react"
import './claculator.css'

function Calculator() {
        const [calc, setCalc] = useState("");
        const [result, setResult] = useState("");

        const ops = ['/', '*', '+', '-', '.'];

        const updateCalc = value => {
            if (
                ops.includes((value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1))
                )
            )
            {return;}
            setCalc(calc + value);

            if (!ops.includes(value)) {
                setResult(eval(calc + value).toString())
            }
        }

        const createDigits = () => {
            const digits = [];
            for(let i = 1; i < 10; i++){
                digits.push(
                    <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
                )
            }
            return digits;
        }

        const calculate = () => {
            setCalc(eval(calc).toString());
        }

        const deleteLast = () => {
            if (calc === '') {
                return;
            }

            const value = calc.slice(0, -1);

            setCalc(value);
        }

        return(
            <div className='body'>
                <div className='calculator'>
                    <div className='display'>
                        {result ? <span>({result})</span> : ''}
                        &nbsp;
                        { calc || '0' }
                    </div>

                    <div className='operators'>
                        <button onClick={() => updateCalc('/')}>/</button>
                        <button onClick={() => updateCalc('*')}>*</button>
                        <button onClick={() => updateCalc('+')}>+</button>
                        <button onClick={() => updateCalc('-')}>-</button>

                        <button onClick={deleteLast}>DEL</button>
                    </div>

                    <div className='digits'>
                        { createDigits() }
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={calculate}>=</button>
                        
                    </div>
                </div>
            </div>
        )

}

export default Calculator;

// export default class calculator extends React.Component {
    // render(){
        // const [calc, setCalc] = useState(" ");
        // const [result, setResult] = useState(" ");

        // const ops = ['/', '*', '+', '-', '.'];

        // const updateCalc = value => {
        //     setCalc(calc + value);
        // }

        // const createDigits = () => {
        //     const digits = [];
        //     for(let i = 1; i < 10; i++){
        //         digits.push(
        //             <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
        //         )
        //     }
        //     return digits;
        // }

        // return(
        //     <div className='body'>
        //         <div className='calculator'>
        //             <div className='display'>
        //                 {result ? <span>(0)</span> : ''} 
        //                 { calc || '0' }
        //             </div>

        //             <div className='operators'>
        //                 <button onClick={() => updateCalc('/')}>/</button>
        //                 <button onClick={() => updateCalc('*')}>*</button>
        //                 <button onClick={() => updateCalc('+')}>+</button>
        //                 <button onClick={() => updateCalc('-')}>-</button>

        //                 <button>DEL</button>
        //             </div>

        //             <div className='digits'>
        //                 { createDigits() }
        //                 <button onClick={() => updateCalc('0')}>0</button>
        //                 <button onClick={() => updateCalc('.')}>.</button>
        //                 <button>=</button>
                        
        //             </div>
        //         </div>
        //     </div>
        // )
//     }
// }