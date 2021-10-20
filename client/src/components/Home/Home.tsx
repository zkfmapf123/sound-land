import { SideReducerType } from 'moduels/reducer.index';
import React from  'react';
import { useSelector } from 'react-redux';
import { HeaderLabel, HomeColumn, HomeContainer, HomeLeftColumn, HomeRightColumn, HomeRightInnerColumn } from './Style';

interface Props{
    recentlyAddSongs ?: {};
    latestAlbumRelease ?: {};
    topArtists ?: {};
};

const Home = ({recentlyAddSongs, latestAlbumRelease, topArtists} : Props) =>{

    const reducer = useSelector((state : SideReducerType) => state);
    
    return(
        <HomeContainer>
            {/** best song */}
            <HomeLeftColumn>
                <HeaderLabel>{`${reducer.sideReducer.title === 'Home' ? '' 
                                : reducer.sideReducer.title} 인기음악`}</HeaderLabel>
            </HomeLeftColumn>
            {/** recently song, top artist */}
            <HomeRightColumn>
                <HeaderLabel>{`${reducer.sideReducer.title === 'Home' ? '' 
                                : reducer.sideReducer.title} 최근에 추가된 곡`}</HeaderLabel>
                <HomeRightInnerColumn>

                </HomeRightInnerColumn>
                <HeaderLabel>{`${reducer.sideReducer.title === 'Home' ? '' 
                                : reducer.sideReducer.title} 최고의 아티스트`}</HeaderLabel>
                <HomeRightInnerColumn>

                </HomeRightInnerColumn>
            </HomeRightColumn>
        </HomeContainer>
    )
};

export default Home;