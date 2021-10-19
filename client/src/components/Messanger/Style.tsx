import st from 'styled-components';
import { Color } from 'utils/Color';

export const MessageContainer = st.div`
    position : absolute;
    bottom : 0;
    right : 0;
    width : 200px;
    margin-right : 100px;
    margin-bottom : 100px;
`;

export const MessagerButton = st.button`
    padding : 10px;
    background-color :${Color.main_background_color};
    border: none;
`;

export const IconView = st.div`
    display: flex;
    align-items: center;
`;

export const IconButtonView = st.button`
    border : none;
`;

export const IconLabel = st.label`
    font-size : 25px;
    color : white;
    margin-left : 15px;
`;