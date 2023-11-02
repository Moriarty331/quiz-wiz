import { useState } from 'react'
import './flashcard.css'
import {AiFillCheckSquare} from 'react-icons/ai'

export const Flashcard = (props) => {
    return (
        <div className="flashcard-container">
            <div className="flashcard-wrapper">
                {props.children}
            </div>     

            <AiFillCheckSquare className='check' onClick={props.countFunction}></AiFillCheckSquare>   
        </div>
    )
}

export const FlashcardItem = (props) => {
    const {showFlashCard} = props;
    return (
        <div className="flashcard" onClick={props.showCard}> 
            {showFlashCard ?
            <div className="term-value">
                <h1>{props.term}</h1>
            </div>
            :
            <div className="definition-value">
                <p>{props.definition}</p>
            </div>
            }     
        </div>
    )
}

export const FlashcardQuiz = (props) => {
    const {correctAnswer} = props;
    const {userAnswer} = props;
    
    return (
        <div className="flashcard-quiz">
            <h3>{props.definition}</h3>
            <div className="answer-section">
                <input type="text" placeholder='Answer' value={props.UserValue} onChange={(e) => userAnswer(e.target.value)} required/>
                <button onClick={props.submit} className="submit">Answer</button>
            </div>
        </div>
    )
}