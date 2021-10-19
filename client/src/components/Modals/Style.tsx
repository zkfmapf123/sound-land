import st from 'styled-components';
import { Color } from 'utils/Color';

export const ModalContainer = st.div`
    display : flex;
    height : 100%;
    flex-direction : column;
    background-color : white;

`;

export const Input = st.input`
    margin : 10px 0px;
    color : black;
    padding : 15px 10px;
    border-radius : 10px;
    border : 1px solid gray;
`;

export const TouchButton = st.button`
    margin : 7px 0px;
    border-radius : 50px;
    background-color : ${Color.auth_button_background_color};
`;

export const TouchButtonLabel = st.p`
    color : white;
    font-size : 20px;
`;

export const Column = st.div`
    display :flex;
    flex-direction : column;
    justify-content :center;
    flex : 1;
`;

export const NotFlexColumn = st.div`
    display : flex;
    flex-direction :column;
    justify-content: felx-end;
`;


export const ItemColumn =st.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
`;

export const Image = st.img`
    width : 100px;
    hegiht : 100px;
    margin : auto;
`;

export const Label = st.p`
    margin : 10px auto;
    color : gray;
    font-size : 18px;
`;



