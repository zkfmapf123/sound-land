import { useAuth } from 'moduels/hooks/useAuth';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Column, Input, ModalContainer, TouchButtonLabel, Image, TouchButton, Label } from './Style';

interface Props {
    visible: boolean;
    onPress: () => void;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 300,
        height: 900,
        borderRadius: 30,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const JoinModal = ({ visible, onPress }: Props) => {
    const [joinStep, setJoinStep] = useState<number>(0);
    const user = useAuth();

    useEffect(()=>{
        setJoinStep(0);
    },[]);

    // 로그인, 비밀번호
    const firstStepFinish = () =>{
        try{
            if(user.isValidEmail() && user.isValidPassword){
                console.log(true);
            }
            setJoinStep(1);
        }catch(e){
            if(e instanceof SyntaxError){
                alert('이메일이 유효하지 않습니다');
            };  

            if(e instanceof RangeError){
                alert('비밀번호가 같지 않거나, 유효하지 않습니다');
            };
        }   

    };

    // 닉네임, 태그, 썸네일
    const FinalStepFinish = () =>{

        console.log(user);
    };

    const validPassword = () =>{
        const pw = user.getPassword();
        const pw2 = user.getPasswrod2();

        if(pw === '' && pw2 === ''){
            return '';
        };

        if(pw === pw2){
            return '두 비밀번호가 같습니다';
        };

        return '두 비밀번호가 다릅니다';
    };

    return (
        <Modal
            style={customStyles}
            isOpen={visible}>
            <ModalContainer>
                {/** Logo */}
                <Column>
                    <Image src={'logo.png'} />
                </Column>
                {/** main */}
                {
                    joinStep === 0 ?
                        (<Column>
                            <Column 
                                style={{
                                }}>
                                <Input
                                    placeholder='이메일을 입력하세요'
                                    type='email'
                                    value={user.getEmail()}
                                    onChange={user.setEmail}
                                />
                                <Input
                                    placeholder='8 ~ 15 글자 이내로 특수문자 포함'
                                    type='password'
                                    value={user.getPassword()}
                                    onChange={user.setPassword} />
                                <Input
                                    placeholder='비밀번호를 한번 더 입력하세요'
                                    type='password'
                                    value={user.getPasswrod2()}
                                    onChange={user.setPassword2} />
                                <Label>{validPassword()}</Label>
                            </Column>
                            <Column>
                                <TouchButton onClick={() => firstStepFinish()}>
                                    <TouchButtonLabel>{'다음 단계로'}</TouchButtonLabel>
                                </TouchButton>
                                <TouchButton onClick={onPress}>
                                    <TouchButtonLabel>{'그만 두기'}</TouchButtonLabel>
                                </TouchButton>
                            </Column>
                        </Column>)
                        :
                        (<Column>
                            <Input
                                type='text'
                                value={user.getName()} />
                            {/** thumnail */}

                            {/** favorit music */}

                            <TouchButton onClick={() => FinalStepFinish()}>
                                <TouchButtonLabel>{'회원가입 완료하기'}</TouchButtonLabel>
                            </TouchButton>
                            <TouchButton onClick={onPress}>
                                <TouchButtonLabel>{'그만 두기'}</TouchButtonLabel>
                            </TouchButton>
                        </Column>)
                }
            </ModalContainer>
        </Modal>
    )
};

export default JoinModal;