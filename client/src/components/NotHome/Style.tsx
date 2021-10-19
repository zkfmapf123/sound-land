import st from 'styled-components';

export const NotHomeContainer= st.div`
    display : flex;
    flex : 1;
    flex-direction :column;
`;

export const NotHomeColumn = st.div`
    dispaly : flex;
    flex : 1;
    border: 1px solid red;
`;

export const NotHomeLabel = st.label`
    font-size : 25px;
    color : white;
    font-weight : bold;
`;