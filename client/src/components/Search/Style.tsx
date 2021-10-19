import st from 'styled-components';

export const SearchContainer= st.div`
    display : flex;
    flex : 1;
    flex-direction :column;
`;

export const SearchColumn = st.div`
    dispaly : flex;
    flex : 1;
    border: 1px solid red;
`;

export const SearchLabel = st.label`
    font-size : 25px;
    color : white;
    font-weight : bold;
`;