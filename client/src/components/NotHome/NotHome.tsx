import { HeaderLabel, NotHomeContainer, NotHomeLeftColumn, NotHomeRightColumn, NotHomeRightInnerColumn } from './Style';

interface Props{

}

const NotNotHome = ({} : Props) =>{

    return (
        <NotHomeContainer>
            {/** best song */}
            <NotHomeLeftColumn>
                <HeaderLabel>인기 음악</HeaderLabel>
            </NotHomeLeftColumn>
            {/** recently song, top artist */}
            <NotHomeRightColumn>
                <HeaderLabel>최근에 추가된 곡</HeaderLabel>
                <NotHomeRightInnerColumn>

                </NotHomeRightInnerColumn>
                <HeaderLabel>최고의 아티스트</HeaderLabel>
                <NotHomeRightInnerColumn>

                </NotHomeRightInnerColumn>
            </NotHomeRightColumn>
        </NotHomeContainer>  
    )
};

export default NotNotHome;