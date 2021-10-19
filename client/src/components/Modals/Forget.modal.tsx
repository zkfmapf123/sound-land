import Modal from 'react-modal';
import { Column, Label, ModalContainer, TouchButton, TouchButtonLabel } from './Style';

interface Props{
    visible : boolean
    onPress : ()=>void;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 300,
        height: 600,
        borderRadius: 30,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

const Forget = ({visible, onPress} :Props) =>{

    return (
        <Modal 
          overlayClassName={'forget-overlay'}
          style={customStyles}
          isOpen={visible}>
          <ModalContainer>
             <Column>
                {/** 아이디 찾기 */}
                <Column>
                
                </Column>
                {/** 비밀번호 찾기 */}
                <Column>
                
                </Column>
                <Column>
                    <TouchButton onClick={onPress}>
                        <TouchButtonLabel>{'끝내기'}</TouchButtonLabel>
                    </TouchButton>
                </Column>
             </Column>
          </ModalContainer>
        </Modal>
    )

};

export default Forget;

