import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../count.css'

const TextForm = (props) => {

    const toUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const toLowCase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const ChangeHendler = (event) => {
        setText(event.target.value)
    }
    const Clear = (event) => {
        setText("")
    }

    const [text, setText] = useState('Enter your text')

    console.log(text);
    return (
        <>

            <div className='textForm'>
                <h1>{props.heading}</h1>
                <textarea value={text} onChange={ChangeHendler} id="" cols="50" rows="10"></textarea>
                <div className="txtBtn">
                    <Button onClick={toUpCase} variant="primary">Upper Case</Button>
                    <Button onClick={Clear} variant="primary mx-3">Clear Text</Button>
                    <Button onClick={toLowCase} variant="primary">Lower Case</Button>
                </div>
            </div>
        </>
    )
}
export default TextForm;