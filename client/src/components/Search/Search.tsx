import React, { useState } from 'react';
import { InputText, SearchBar, SearchContainer, TouchButton} from './Style';
import {AiOutlineSearch, AiOutlineClose, AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai';
import { useSearch } from 'moduels/hook.index';

interface Props{
    placeholder:string;
};

const separateArr : string[] = ['음악 이름', '가수 이름','태그'];

const Search = ({placeholder} : Props) =>{
    const [num, setNum] = useState<number>(0);
    const input = useSearch('');

    const onHandleKeyPrss =(e: any) =>{
        if(e.key === 'Enter'){
            alert('submit');
        }
    };

    const onHandleSeparate = (isLeft : boolean) : void =>{
        if(isLeft){
            if(num === 0) {
                setNum(2);
            }else{
                setNum(num-1);
            }
        }else{
            if(num === 2){
                setNum(0);
            }else{
                setNum(num+1);
            }
        };

        input.setString(separateArr[num]);
    };

    return(
        <SearchContainer>
            <TouchButton onClick={()=>onHandleSeparate(true)}>
                <AiOutlineCaretLeft style={IconStyle}/>
            </TouchButton>
            <TouchButton onClick={()=>onHandleSeparate(false)}>
                <AiOutlineCaretRight style={IconStyle}/>
            </TouchButton>
            <SearchBar>
                <AiOutlineSearch style={{
                    marginLeft : 30
                }}/>
                <InputText
                    type='text'
                    placeholder={separateArr[num]}
                    value={input.get()}
                    onChange={input.set}
                    onKeyPress={onHandleKeyPrss}/>
            </SearchBar>
        </SearchContainer>
    )
}; 

const IconStyle = {

    color: `white`,
}


export default Search;
