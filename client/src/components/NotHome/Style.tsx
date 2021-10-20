import st from 'styled-components';

export const NotHomeContainer = st.div`
    display : flex;
    flex : 1;
    flex-direction : row;
`;


export const NotHomeColumn = st.div`
    display :flex;
    flex : 1;
    flex-direction : column;
`;;

export const NotHomeLeftColumn =st.div`
    display:flex;
    flex : 0.5;
    flex-direction :column;
    border: 1px solid red;
`;

export const NotHomeRightColumn = st.div`
    display:flex;
    flex : 1;
    flex-direction :column;
`;

export const NotHomeRightInnerColumn = st.div`
    display :flex;
    flex : 1;
    flex-direction :row;
    border: 1px solid red
`;

export const NotHomeLeftInnterColumn = st.div`
    display : flex;
    flex: 1;
    flex-direction : row;
    border: 1px solid red;
`;


export const HeaderLabel = st.label`
    color : white;
    font-size : 25px;
    font-weight : bold;
`;
