import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import NotHome from 'components/NotHome/NotHome';
import Search from 'components/Search/Search';
import Sidebar from 'components/Sidebar/Sidebar';
import { useCookie } from 'moduels/hook.index';
import { SideReducerType } from 'moduels/reducer.index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MusicSeparateType } from 'utils/Type';
import { AppContainer, LeftColumn, RightBottomColum, RightColumn, RightTopColumn } from './Style';

const Music = () =>{
    const reducer = useSelector((state:SideReducerType) => state);
    const [screen, setScreen] = useState<MusicSeparateType>('Home');

    useEffect(()=>{
        setScreen(reducer.sideReducer.title);
    },[reducer])

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
                    {
                        screen === 'Home' ? <Home/> :
                        screen === 'Search' ? <Search/> : <NotHome/>
                    }
                </RightBottomColum>
            </RightColumn>
        </AppContainer>
    )
};

export default Music;