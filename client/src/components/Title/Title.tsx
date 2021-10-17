import React from 'react';
import {Label} from './Style';

interface Props{
    label :string;
}

const Title = ({label} :Props) =>{
    return (
        <Label>{label}</Label>
    )
};

export default Title;

