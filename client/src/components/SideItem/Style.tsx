import st from 'styled-components';

export const SideItemButton = st.button`
    display: flex;
    flex-direction : row;
    align-items: center;
    border: 0;
    margin : 10px 0px;
    padding-left : 10px;

    border-radius : 50px 0 0 50px;
`;

export const SideItemLabel = st.p`
    font-size: 20px;

`;
