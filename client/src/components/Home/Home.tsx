import React from  'react';
import { HeaderLabel, HomeColumn, HomeContainer } from './Style';

interface Props{
    recentlyAddSongs ?: {};
    latestAlbumRelease ?: {};
    topArtists ?: {};
};

const Home = ({recentlyAddSongs, latestAlbumRelease, topArtists} : Props) =>{
    
    return(
        <HomeContainer>
            <HeaderLabel>최근에 추가된 곡</HeaderLabel>
            <HomeColumn>

            </HomeColumn>
            <HeaderLabel>최근에 만들어진 앨범</HeaderLabel>
            <HomeColumn>
                
            </HomeColumn>
            <HeaderLabel>최고의 아티스트</HeaderLabel>
            <HomeColumn>
                
            </HomeColumn>
        </HomeContainer>
    )
};

export default Home;