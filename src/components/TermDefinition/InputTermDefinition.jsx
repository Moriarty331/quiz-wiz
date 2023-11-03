import { useState } from 'react'
import './input.css'

export const InputTermDefinition = (props) => {
    const {onTermChange, onDefinitionChange } = props; 
    return (

        <div className="input-term-definition">
            <div className="term section">
                <input 
                type="textarea" placeholder='Enter term'
                onChange={(e) => onTermChange(e.target.value)}
                value={props.termValue}
                />
            </div>

            <div className="definition section">
                <input 
                type="textarea" 
                placeholder='Enter definition'
                value={props.DefinitionValue}
                onChange={(e) => onDefinitionChange(e.target.value)}
                />
            </div>
            {props.children}
        </div>
    )
}