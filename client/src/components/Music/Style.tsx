import st from 'styled-components';

export const AppContainer = st.div`
    display : flex;
    flex : 1;
    flex-direction :row;
`;

export const LeftColumn = st.div`
    display : flex;
    flex-direction : column;
    width : 10%;
    max-width : 300px;
    min-width : 200px;
`;

export const RightColumn = st.div`
    display : flex;
    flex : 1;
    flex-direction :column;
`;

export const RightTopColumn = st.div`
    display : flex;
    height : 100px;
    flex-direction :row;
`;

export const RightBottomColum = st.div`
    display: flex;
    flex :1;
    flex-direction :column;   
    padding : 2%;
`;


