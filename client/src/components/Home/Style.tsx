import st from 'styled-components';

export const HomeContainer = st.div`
    display : flex;
    flex : 1;
    flex-direction : row;
`;


export const HomeColumn = st.div`
    display :flex;
    flex : 1;
    flex-direction : column;
`;;

export const HomeLeftColumn =st.div`
    display:flex;
    flex : 0.5;
    flex-direction :column;
    border: 1px solid red;
`;

export const HomeRightColumn = st.div`
    display:flex;
    flex : 1;
    flex-direction :column;
`;

export const HomeRightInnerColumn = st.div`
    display :flex;
    flex : 1;
    flex-direction :row;
    border: 1px solid red
`;

export const HomeLeftInnterColumn = st.div`
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
