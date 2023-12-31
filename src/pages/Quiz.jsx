import { useState } from 'react';
import {Navbar} from '../components/Navbar/Navbar'
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition';
import {Flashcard, FlashcardQuiz} from '../components/Flashcard/Flashcard';
import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineStop} from 'react-icons/ai'
import './quiz.css'

export const Quiz = () => {
    //const [flashcards, setFlashcards] = useState([]);
    const flashcards = JSON.parse(localStorage.getItem("myFlashcards"));
    //console.log(test)
   

    const [userAnswer, setUserAnswer] = useState("");
    const [term, setTerm] = useState("");
    const [definition, setdefinition] = useState("");
    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(0);
    const [isEmpty, setIsEmpty] = useState(flashcards.length === 0);
    const handleTerm = (value) => {
        setTerm(value);
    }

    const handleDefinition = (value) => {
        setdefinition(value);
    }

    const handleCorrectAns = (value) => {
        setUserAnswer(value);
    }

    const submit = (e) => {
        
        if (userAnswer.toLowerCase() === flashcards[index].termName.toLowerCase())
        {
            const correctContainer = document.querySelector(".correct-container");
            
            correctContainer.classList.add("darken")
            correctContainer.classList.add("slide-bottom")
            setTimeout(() => {
                correctContainer.classList.remove("slide-bottom");
                correctContainer.classList.remove("darken");
                if (index < flashcards.length - 1) 
                    setIndex(index + 1)
                else if (index === flashcards.length - 1)
                    setIndex(0)
            }, 1200);
            setUserAnswer("");
        }
        
        else {
            const wrongContainer = document.querySelector(".wrong-container");
            wrongContainer.classList.add("darken")
            wrongContainer.classList.add("slide-bottom")
            setTimeout(() => {
                wrongContainer.classList.remove("slide-bottom");
                wrongContainer.classList.remove("darken");
            }, 1200);
        }
        setUserAnswer("");  
    }

    
    return (
        <div className="quiz-container">
            <Navbar name="Quiz"></Navbar>
            <div className="quiz-main">
                <Flashcard>
                    <FlashcardQuiz 
                        definition={isEmpty ? "" : flashcards[index].definitionName}
                        answer={isEmpty ? "" : flashcards[index].termName}
                        submit={submit}
                        userAnswer={handleCorrectAns}
                        UserValue={userAnswer}
                    />
                    <div className="correct-container">
                        <AiOutlineCheck className='correct'></AiOutlineCheck>
                    </div>

                    <div className="wrong-container">
                        <AiOutlineStop className='wrong'></AiOutlineStop>
                    </div>
                </Flashcard>
                {!isEmpty && <p className='count-flashcards'>{index + 1} / {flashcards.length}</p>}
            </div>
        </div>
    )
}