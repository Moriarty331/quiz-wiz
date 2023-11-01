import { useState } from 'react'
import {Navbar} from '../components/Navbar/Navbar'
import { InputTermDefinition } from '../components/TermDefinition/InputTermDefinition'
import {Link} from 'react-router-dom';
import './createtask.css'
export const CreateTask = () => {
    const [termDefinitions, setTermDefinitions] = useState([<InputTermDefinition></InputTermDefinition>]);

    const addCard = () => {
        setTermDefinitions([...termDefinitions, <InputTermDefinition></InputTermDefinition>])
    }

    console.log(termDefinitions.length)
    return (
        <div className="create-task-container">
            <Navbar name="Create Task"></Navbar>
            <div className="create-task-main">
                {termDefinitions.map((data,index) => {
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
                
                <Link to="/"><button className='create'>Create</button></Link>
            </div>        
          
        </div>
    )
}