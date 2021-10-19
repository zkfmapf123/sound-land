import ProfileTop from 'components/ProfileTop/Profile.top';
import SearchBar from 'components/SearchBar/SearchBar';
import { HeaderContainer } from './Style';

interface Props{
    placeholder:string;
}

const Header = ({placeholder} : Props) =>{
    return(
        <HeaderContainer>
            {/** search */}
                <SearchBar placeholder={placeholder}/>
            {/** profile */}
                <ProfileTop/>
        </HeaderContainer>
    )
};

export default Header;

