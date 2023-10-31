
import { useState } from 'react';
import {Flashcard} from '../components/Flashcard/Flashcard';
import {FlashcardItem} from '../components/Flashcard/Flashcard';
import {Navbar} from '../components/Navbar/Navbar';
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition';
import {MdQuiz} from 'react-icons/md'
import './home.css'

export const Home = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [term, setTerm] = useState("");
    const [definition, setdefinition] = useState("");
    const [show, setShow] = useState(true);

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
        }
        setTerm('');
        setdefinition('');

    }

    const handleFlashcard = () => {
        setShow(!show)
    }


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
                    <div className="quiz">
                        <h2>Quiz</h2>
                        <MdQuiz className='quiz-icon'></MdQuiz>
                    </div>
                </div>


                <Flashcard>
                    {flashcards.map((data, index) => {
                        return (
                            <FlashcardItem 
                            term={data.termName} 
                            definition={data.definitionName} 
                            key={index}
                            showCard={handleFlashcard}
                            showFlashCard={show}
                            >                           
                            </FlashcardItem>
                        )
                    })}
                    
                    
                </Flashcard>
                
            </div>

        </div>
    )
}