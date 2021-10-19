import st from 'styled-components';
import {Color} from 'utils/utils.index';

export const SearchBarContainer = st.div`
    display : flex;
    flex :1;
    flex-direction : row;
    align-items: center;
`;

export const SearchBarColumn = st.div`
    display : flex;
    align-items: center;
    width : 80%;
    min-width : 500px;
    background-color: white;
    border: 1px solid blue;
    border-radius : 50px;
`;

export const InputText = st.input`
    width : 80%;
    padding : 10px;
    border: none;
    font-size : 20px;

    &:focus {
        outline-width : 0;
    }
`;

export const TouchButton = st.button`
    border: none;
    background-color : ${Color.main_background_color};
    color : white;
    font-size : 20px;
`;