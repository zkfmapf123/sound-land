import st from 'styled-components';
import { Color } from 'utils/Color';

export const ProfileTopContainer = st.div`
    display : flex;
    flex :1;
    flex-direction :row;
    justify-content : flex-end;
    align-items: center;
    margin-right: 50px;
    min-width : 300px;
`;

export const TouchButton = st.button`
    border: none;
    background-color : ${Color.main_background_color};
    margin : 0 20px;
`;

export const Label = st.p`
    color : white;
    font-size : 20px;

    &:hover{
        color : gray;
    }
`;
