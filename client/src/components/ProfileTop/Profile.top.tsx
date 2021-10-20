import Forget from 'components/Modals/Forget.modal';
import JoinModal from 'components/Modals/Join.modal';
import LoginModal from 'components/Modals/Login.modal';
import ProfileTopBar from 'components/ProfileTopBar/ProfileTopBar';
import { useCookie } from 'moduels/hook.index';
import { useEffect, useState } from 'react';
import { Label, ProfileTopContainer, TouchButton } from './Style';

const ProfileTop = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isJoin, setIsJoin] = useState<boolean>(false);
    const [isForget, setIsForget] = useState<boolean>(false);
    const [user, setUser] = useState();
    const auth = useCookie();

    useEffect(()=>{
        // !auth.isCookie();
        if(!auth.isCookie()){
            setIsLogin(true);
        };

    },[auth]);

    // login -> join
    const loginMoveJoin = () =>{
        setIsLogin(true);

        setTimeout(()=>{
            setIsJoin(true)
        },100);
    };

    // login -> forget
    const loginMoveForget = () =>{
        setIsLogin(true);

        setTimeout(()=>{
            setIsForget(true);
        },100) 
    }

    return (
        <ProfileTopContainer>
            {isLogin && <LoginModal visible={isLogin} onPress={() => loginMoveJoin()} onForgetPassword={() => loginMoveForget()}/>}
            {isJoin && <JoinModal visible={isJoin} onPress={() => setIsJoin(false)} />}
            {isForget && <Forget visible={isForget} onPress={()=>setIsForget(false)}/>}
            {/* {
                user &&
                <ProfileTopBar/>
            } */}
            <ProfileTopBar/>
        </ProfileTopContainer>
    )
};

export default ProfileTop