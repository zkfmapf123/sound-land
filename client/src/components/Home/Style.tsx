import st from 'styled-components';

export const HomeContainer = st.div`
    display : flex;
    flex : 1;
    flex-direction : column;
`;


export const HomeColumn = st.div`
    display :flex;
    flex : 1;
    border :1px solid red;
`;

export const HeaderLabel = st.label`
    color : white;
    font-size : 25px;
    font-weight : bold;
`;
