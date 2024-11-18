'use client'

import { useState } from 'react';

export default function ToggleButton (
    props: {
        text: string
        unSelectedClass: string,
        selectedClass: string,
        className?: string
    }){

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };
     
    return(
        <button 
            className={`${props.className ? props.className : ''} ${isSelected ? props.selectedClass : props.unSelectedClass}`}
            onClick={handleClick} type='button'>
            <p>{props.text}</p>
        </button>
    )   
};