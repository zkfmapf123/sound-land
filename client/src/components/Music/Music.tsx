import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import Messanger from 'components/Messanger/Messanger';
import NotHome from 'components/NotHome/NotHome';
import Profile from 'components/Profile/Profile';
import Search from 'components/Search/Search';
import Sidebar from 'components/Sidebar/Sidebar';
import Upload from 'components/Upload/Upload';
import { SideReducerType } from 'moduels/reducer.index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SideType } from 'utils/Type';
import { AppContainer, LeftColumn, RightBottomColum, RightColumn, RightTopColumn } from './Style';

const Music = () =>{
    const reducer = useSelector((state:SideReducerType) => state);
    const [screen, setScreen] = useState<SideType>('Home');

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
                        screen === 'Search' ? <Search/> :
                        screen === 'Profile' ? <Profile/> :
                        screen === 'Upload' ? <Upload/> : <Home/>
                    }
                </RightBottomColum>
            </RightColumn>
            <Messanger/>
        </AppContainer>
    )
};

export default Music;