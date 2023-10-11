import { useState } from 'react';
import './count.css'

let Count = () => {

    const [count, setCount] = useState(0);

    const IncNumber = () => {
        setCount(count + 1)
    }
    const DecNumber = () => {
        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className='count-div'>
                <div className='num'>
                    <span>{count}</span>
                </div>
                <div className="btns">
                    <button onClick={DecNumber}>DesCount</button>
                    <button onClick={Reset}>Reset</button>
                    <button onClick={IncNumber}>Count</button>
                </div>


            </div>
        </>
    )
}
export default Count;