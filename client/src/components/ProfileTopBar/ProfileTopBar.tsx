import { UserAuthDto } from "utils/Type";
import { ProfileTopBarContainer, Image, Label } from "./Style";

interface Props{
    user?: UserAuthDto;
    onMoveProfile?:()=>void;
}

const ProfileTopBar = ({user, onMoveProfile} : Props) =>{
    // const {id, thumnails, email} = user;

    return(
        <ProfileTopBarContainer>
            <Image src={'logo2-black.jpeg'}/>
            <Label>{'이동규님 반갑습니다'}</Label>
        </ProfileTopBarContainer>
    )
};

export default ProfileTopBar;