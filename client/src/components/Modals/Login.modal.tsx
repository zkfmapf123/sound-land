import { Column, TouchButton } from './Style';
import Modal from 'react-modal';
import { Input, ModalContainer, TouchButtonLabel, Image } from './Style';
import { useSearch } from 'moduels/hook.index';

interface Props {
    visible: boolean;
    onPress: () => void;
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 300,
        height: 500,
        borderRadius: 30,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const LoginModal = ({ visible, onPress }: Props) => {
    const email = useSearch('');
    const password = useSearch('');

    return (
        <Modal
            style={customStyles}
            isOpen={visible}>
            <ModalContainer>
                {/** Logo */}
                <Column>
                    <Image src={'./logo.png'} />
                </Column>
                <Column>
                    <Input
                        type='email'
                        placeholder='이메일을 입력하세요'
                        value={email.get()}
                        onChange={email.set}
                    />
                    <Input
                        type='password'
                        placeholder='비밀번호를 입력하세요'
                        value={password.get()}
                        onChange={password.set}
                    />
                </Column>
                <Column>
                    <TouchButton onClick={() => alert('login')}>
                        <TouchButtonLabel>{'로그인하기'}</TouchButtonLabel>
                    </TouchButton>
                    <TouchButton onClick={onPress}>
                        <TouchButtonLabel>{'회원가입 하기'}</TouchButtonLabel>
                    </TouchButton>
                </Column>
            </ModalContainer>
        </Modal>
    )
};

export default LoginModal;