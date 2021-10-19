import { IconButtonView, IconLabel, IconView, MessageContainer, MessagerButton } from './Style';
import { MdRadioButtonChecked } from 'react-icons/md';
import { Color } from 'utils/Color';
import { useEffect, useState } from 'react';
import {FcEngineering,FcOpenedFolder} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { sideAction } from 'moduels/reducer.index';

const Profile = () =>{
    const dispatch = useDispatch();
    const [hover, setHover] = useState<boolean>(false);

    const onClickHover = () =>{
        
        dispatch(sideAction('Profile'));
        setHover(true);
        setTimeout(()=>{
            setHover(false);
        },200)
    };

    return (
        <IconView style={{
            flexDirection : 'row'
        }}
        onClick={()=>onClickHover()}>
            <FcEngineering style={{
                width :100,
                height : 100,
                opacity : hover ? 0.5 : 1
            }}/>
            <IconLabel>{'내 정보'}</IconLabel>
        </IconView>
    )
};

const Upload = () =>{
    const dispatch = useDispatch();
    const [hover, setHover] = useState<boolean>(false);

    const onClickHover = () =>{

        dispatch(sideAction('Upload'));
        setHover(true);
        setTimeout(()=>{
            setHover(false);
        },200)
    };

    return (
        <IconView style={{
            flexDirection : 'row'
        }}
        onClick={()=>onClickHover()}>
            <FcOpenedFolder style={{    
                width : 100,
                height : 100,
                opacity : hover ? 0.5 : 1
            }}/>
            <IconLabel>{'업로드'}</IconLabel>
        </IconView>
    )
};

const Messanger = () => {
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        setHover(false);
    }, []);

    const onPressButton = () => {

        if (hover) {
            setHover(false);
        } else {
            setHover(true);
        }
    };

    return (
        <MessageContainer>
            {
                hover &&
                <IconView style={{
                    flexDirection : 'column'
                }}>
                    <Profile/>
                    <Upload/>
                </IconView>
            }
            <MessagerButton onClick={() => onPressButton()}>
                <MdRadioButtonChecked
                    style={{
                        width: 100,
                        height: 100,
                        color: Color.auth_join_music_click_color,
                        opacity: hover ? 0.5 : 1
                    }}
                />
            </MessagerButton>
        </MessageContainer>
    );
};


export default Messanger;