import st from 'styled-components';

export const ProfileTopBarContainer = st.div`
    display : flex;
    flex : 1;
    align-items: center;
    justify-content : flex-end;
`;

export const Image = st.img`
    width : 50px;
    height : 50px;
    border-radius : 50px;
    margin-right : 25px;
`;

export const Label =st.label`
    color : white;
    font-size : 25px;
    margin-right : 50px;
`;