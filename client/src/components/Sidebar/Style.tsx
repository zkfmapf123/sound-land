import st from 'styled-components';
import { Color } from 'utils/Color';

export const AppContainer = st.div`
    display : flex;
    flex : 1;
    flex-direction :column;
    background-color : ${Color.side_background_color};
`;