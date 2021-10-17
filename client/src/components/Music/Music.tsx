import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { SideReducerType } from 'moduels/reducer.index';
import { useSelector } from 'react-redux';
import { AppContainer, LeftColumn, RightBottomColum, RightColumn, RightTopColumn } from './Style';

const Music = () =>{
    const reducer = useSelector((state:SideReducerType) => state);

    console.log(reducer.sideReducer.title);

    return(
        <AppContainer>
            {/** side bar */}
            <LeftColumn>
                <Sidebar/>
            </LeftColumn>
            {/** main column */}
            <RightColumn>
                {/** search */}
                <RightTopColumn>
                    <Header placeholder='듣고 싶은 음악을 검색해보세요'/>
                </RightTopColumn>
                {/** main */}
                <RightBottomColum>
                    {/** reducer에 따라서 view가 바뀐다 */}
                </RightBottomColum>
            </RightColumn>
        </AppContainer>
    )
};

export default Music;