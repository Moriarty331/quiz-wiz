import { useState } from 'react'
import {Navbar} from '../components/Navbar/Navbar'
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition'
import {Link} from 'react-router-dom';
import './createtask.css'

export const CreateTask = () => {
    const [term, setTerm] = useState([]);
    const [definition, setDefinition] = useState([]);
    const [index, setIndex] = useState(0)
    const array = [];
    const handleTerm = (value) => {
        setTerm(...term, value);
    }
    
    const handleDefinition = (value) => {
        setDefinition(...definition, value);
    }

    const [termDefinitions, setTermDefinitions] = useState([]);


    const addCard = () => {
        setTermDefinitions([...termDefinitions, <InputTermDefinition
            onDefinitionChange={handleDefinition}
            onTermChange={handleTerm}
            key={index}
            ></InputTermDefinition>])
            setIndex(index + 1)
    }
    
    console.log(term)
    return (
        <div className="create-task-container">
            <Navbar name="Create Task"></Navbar>
            <div className="create-task-main">
                {termDefinitions.map((data, index) => {
                    return (
                        <div key={index} style={{position: "relative"}}>
                            <p className='count'>{index + 1}</p>
                            {data}
                        </div>
                    )
                })}

                <div className="add-card">
                    <button onClick={addCard}>Add Card</button>
                </div>
                
                <button className='create'>Create</button>
            </div>        
          
        </div>
    )
}