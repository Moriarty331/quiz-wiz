import { useState } from 'react';
import {Navbar} from '../components/Navbar/Navbar'
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition';
import {Flashcard, FlashcardQuiz} from '../components/Flashcard/Flashcard';
import {AiOutlineCheck} from 'react-icons/ai'
import './quiz.css'

export const Quiz = () => {
    const [flashcards, setFlashcards] = useState([
        {
            termName: "Johann Sebastian Bach",
            definitionName: "was one of the best knowns of all composers in classical music. He was a natural genius at keyboard and composing and he also mastered the organ and harpsichord.",
        }
    ]);

    const [userAnswer, setUserAnswer] = useState("");
    const [term, setTerm] = useState("");
    const [definition, setdefinition] = useState("");
    const [show, setShow] = useState(true);
    //const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);
    const [index, setIndex] = useState(0);
    const [isEmpty, setIsEmpty] = useState(flashcards.length === 0);
    console.log(isEmpty)
    const handleTerm = (value) => {
        setTerm(value);
    }

    const handleDefinition = (value) => {
        setdefinition(value);
    }

    const handleCorrectAns = (value) => {
        setUserAnswer(value);
    }

    const addFlashcard = () =>
    {
        const flashcard = {
            termName: term,
            definitionName : definition,
        }

        if (term != "" && definition != "") {
            setFlashcards([...flashcards, flashcard])
        }
        setTerm('');
        setdefinition('');
        setIsEmpty(false)

    }

    const submit = (e) => {
        
        
        
        if (userAnswer.toLowerCase() === flashcards[index].termName.toLowerCase())
        {
            const correct = document.querySelector(".correct");
            correct.classList.add("slide-bottom")
            setTimeout(() => {
                correct.classList.remove("slide-bottom");
            }, 1000);
        }
        
        else {

        }

        setTimeout(() => {
            if (index < flashcards.length - 1) 
                setIndex(index + 1)
            else if (index === flashcards.length - 1)
                setIndex(0)

            setUserAnswer("");
        }, 700)
        
    }

    console.log(flashcards)
    return (
        <div className="quiz-container">
            <Navbar name="Quiz"></Navbar>
            <div className="quiz-main">
                <InputTermDefinition
                    onTermChange={handleTerm}
                    onDefinitionChange={handleDefinition}
                    termValue={term}        
                    DefinitionValue={definition}>
                    <button className='add' onClick={addFlashcard}>Add Flashcard</button>
                </InputTermDefinition>
                
                <Flashcard>
                    <FlashcardQuiz 
                        definition={isEmpty ? "" : flashcards[index].definitionName}
                        answer={isEmpty ? "" : flashcards[index].termName}
                        submit={submit}
                        userAnswer={handleCorrectAns}
                        UserValue={userAnswer}
                    />
                    <div className="correct-wrong">
                        <AiOutlineCheck className='correct'></AiOutlineCheck>
                    </div>
                </Flashcard>
            </div>
        </div>
    )
}