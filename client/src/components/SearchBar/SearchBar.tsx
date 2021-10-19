import React, { useState } from 'react';
import { InputText, SearchBarColumn, SearchBarContainer, TouchButton} from './Style';
import {AiOutlineSearch, AiOutlineClose, AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai';
import { useSearch } from 'moduels/hook.index';
import { useDispatch } from 'react-redux';
import { sideAction } from 'moduels/reducer.index';

interface Props{
    placeholder:string;
};

const separateArr : string[] = ['음악 이름', '가수 이름','태그'];

const SearchBar = ({placeholder} : Props) =>{
    const dispatch = useDispatch();
    const [num, setNum] = useState<number>(0);
    const input = useSearch('');

    const onHandleKeyPrss =(e: any) =>{
        if(e.key === 'Enter'){
            dispatch(sideAction('Search',{
                data : input.get(),
                separate : separateArr[num]
            }));
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
        <SearchBarContainer>
            <TouchButton onClick={()=>onHandleSeparate(true)}>
                <AiOutlineCaretLeft style={IconStyle}/>
            </TouchButton>
            <TouchButton onClick={()=>onHandleSeparate(false)}>
                <AiOutlineCaretRight style={IconStyle}/>
            </TouchButton>
            <SearchBarColumn>
                <AiOutlineSearch style={{
                    marginLeft : 30
                }}/>
                <InputText
                    type='text'
                    placeholder={separateArr[num]}
                    value={input.get()}
                    onChange={input.set}
                    onKeyPress={onHandleKeyPrss}/>
            </SearchBarColumn>
        </SearchBarContainer>
    )
}; 

const IconStyle = {

    color: `white`,
}


export default SearchBar;
