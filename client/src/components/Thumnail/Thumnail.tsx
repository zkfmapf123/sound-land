import React from 'react';
import { Img, ThumanilLabel, ThumnailContainer } from './Style';

interface Props{
    onPress:()=>void;
    images :string | undefined;
}

const Thumnail = ({onPress, images} : Props) =>{

    return(
        <ThumnailContainer onClick={onPress}>
            {
                images ? 
                <Img/>
                :
                <ThumanilLabel>{'사진등록을 해주세요'}</ThumanilLabel>
            }
        </ThumnailContainer>
    )
};

export default Thumnail;