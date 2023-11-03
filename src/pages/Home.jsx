
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Flashcard} from '../components/Flashcard/Flashcard';
import {FlashcardItem} from '../components/Flashcard/Flashcard';
import {Navbar} from '../components/Navbar/Navbar';
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition';
import {MdQuiz} from 'react-icons/md'
import './home.css'
import profile1 from '../assets/images/profile.jpg'

export const Home = () => {
    const userFlashcards = JSON.parse(localStorage.getItem("myFlashcards"));
    const [flashcards, setFlashcards] = useState([]);
    const [term, setTerm] = useState("");
    const [definition, setdefinition] = useState("");
    const [show, setShow] = useState(true);
    //const [currentFlashcard, setCurrentFlashcard] = useState(flashcards[0]);
    const [index, setIndex] = useState(0);
    const [isEmpty, setIsEmpty] = useState(userFlashcards.length === 0);
    console.log(userFlashcards)
    const handleTerm = (value) => {
        setTerm(value);
    }
    
    const handleDefinition = (value) => {
        setdefinition(value);
    }

    const addFlashcard = () =>
    {
        const flashcard = {
            termName: term,
            definitionName : definition,
        }

        if (term != "" && definition != " ") {
            setFlashcards([...flashcards, flashcard])
            setTerm('');
            setdefinition('');
        }
        
    }

    const handleFlashcard = () => {
        setShow(!show)
    }

    const handleCount = () => {
        if (index < userFlashcards.length - 1) 
            setIndex(index + 1)
        else if (index === userFlashcards.length - 1)
            setIndex(0)
        setShow(true)
    }

    const saveFlashcards = () => {
        const allFlashcards = JSON.stringify(flashcards)
        localStorage.setItem("myFlashcards", allFlashcards);
    }
    console.log(flashcards)
    return (
        <div className="home">
            <Navbar name="Home"></Navbar>
            
            <div className="home-main">
                <InputTermDefinition
                    onTermChange={handleTerm}
                    onDefinitionChange={handleDefinition}
                    termValue={term}        
                    DefinitionValue={definition}
                >
                    <button className='add' onClick={addFlashcard}>Add Flashcard</button>
                </InputTermDefinition>
                
                <div className="options">
                    <Link to="/quiz">
                        <div className="quiz">
                            <h2>Quiz</h2>
                            <MdQuiz className='quiz-icon'></MdQuiz>
                        </div>
                    </Link>
                </div>


                <Flashcard countFunction={handleCount}>
                    <FlashcardItem 
                    term={isEmpty ? "" : userFlashcards[index].termName} 
                    definition={isEmpty ? "" : userFlashcards[index].definitionName} 
                    showCard={handleFlashcard}
                    showFlashCard={show}
                    >   
                    </FlashcardItem> 
                                                           
                </Flashcard>
                <button onClick={saveFlashcards} className="save">Save flashcards</button>
            </div>

            
        </div>
    )
}