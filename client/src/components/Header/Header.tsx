import ProfileTop from 'components/ProfileTop/Profile.top';
import Search from 'components/Search/Search';
import React from 'react';
import { HeaderContainer } from './Style';

interface Props{
    placeholder:string;
}

const Header = ({placeholder} : Props) =>{
    return(
        <HeaderContainer>
            {/** search */}
                <Search placeholder={placeholder}/>
            {/** profile */}
                <ProfileTop/>
        </HeaderContainer>
    )
};

export default Header;

