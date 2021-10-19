import { NotHomeColumn, NotHomeContainer, NotHomeLabel } from './Style';

interface Props{

}

const NotHome = ({} : Props) =>{

    return (
        <NotHomeContainer>
            <NotHomeLabel>Songs</NotHomeLabel>
            <NotHomeColumn>

            </NotHomeColumn>
            <NotHomeLabel>Albums</NotHomeLabel>
            <NotHomeColumn>
                
            </NotHomeColumn>
            <NotHomeLabel>Artists</NotHomeLabel>
            <NotHomeColumn>
                
            </NotHomeColumn>
        </NotHomeContainer>   
    )
};

export default NotHome;