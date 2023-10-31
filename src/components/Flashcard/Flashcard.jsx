import { useState } from 'react'
import './flashcard.css'
import {AiFillCheckSquare} from 'react-icons/ai'

export const Flashcard = (props) => {
    return (
        <div className="flashcard-container">
            <div className="flashcard-wrapper">
                {props.children}
            </div>     

            <AiFillCheckSquare className='check'></AiFillCheckSquare>   
        </div>
    )
}

export const FlashcardItem = (props) => {
    const {showFlashCard} = props;
    console.log(showFlashCard);
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