import JoinModal from 'components/Modals/Join.modal';
import LoginModal from 'components/Modals/Login.modal';
import { useCookie } from 'moduels/hook.index';
import { useEffect, useState } from 'react';
import { Label, ProfileTopContainer, TouchButton } from './Style';

const ProfileTop = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isJoin, setIsJoin] = useState<boolean>(false);
    const auth = useCookie();

    useEffect(()=>{
        if(!auth.isCookie()){
            setIsLogin(true);
        };

    },[auth]);

    if (auth.get()) {
        return (
            <ProfileTopContainer>

            </ProfileTopContainer>
        )
    } else {
        return (
            <ProfileTopContainer>
                {isLogin && <LoginModal visible={isLogin} onPress={()=>{
                    setIsLogin(true)

                    setTimeout(()=>{
                        setIsJoin(true)
                    },100);
                }}/>}
                {isJoin && <JoinModal visible={isJoin} onPress={()=>setIsJoin(false)}/>}
                <TouchButton onClick={()=>setIsLogin(true)} >
                    <Label>{'Login'}</Label>
                </TouchButton>
                <TouchButton onClick={()=>setIsJoin(true)}>
                    <Label>{'Join'}</Label>
                </TouchButton>
                <TouchButton onClick={()=>alert('send mail')}>
                    <Label>{'Forget'}</Label>
                </TouchButton>
            </ProfileTopContainer>
        )
    }
};

export default ProfileTop