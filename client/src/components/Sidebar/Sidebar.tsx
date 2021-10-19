import { AppContainer } from './Style';
import React, { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import SideItem from 'components/SideItem/SideItem';
import { useDispatch, useSelector } from 'react-redux';
import { sideAction, SideReducerType } from 'moduels/reducer.index';
import { MusicSeparateType } from 'utils/utils.index';
import { MusicSeparate } from 'utils/String';
import { useCookie } from 'moduels/hook.index';

const Sidebar = () =>{
    const dispatch = useDispatch();
    const sideState = useSelector((state : SideReducerType) => state);
    const [sideClick, setSideClick] = useState<number>(0);

    const beforeOnPress = (item : MusicSeparateType) =>{

        dispatch(sideAction(item))
    }

    useEffect(() => {
        const SIDE = sideState.sideReducer.title as MusicSeparateType;
        switch (SIDE) {
            case 'My Favorite':
                return setSideClick(9);
            case 'Balad':
                return setSideClick(1);
            case 'Dance':
                return setSideClick(2);
            case 'Home':
                return setSideClick(0);
            case 'Indie':
                return setSideClick(4);
            case 'Jass':
                return setSideClick(8);
            case 'Pop':
                return setSideClick(7);
            case 'R&B / Soul':
                return setSideClick(5);
            case 'Rap / HipHop':
                return setSideClick(3);
            case 'Rock / Metal':
                return setSideClick(6);
            default:
                return setSideClick(-1);
        }
    }, [sideState]);

    return (
        <AppContainer>
            <Title label={'Sound Land'}/>
            {
                MusicSeparate.map(function(item, index){
                    return (
                        <SideItem 
                            key={index}
                            label={item}
                            visible={index === sideClick ? true : false}
                            onPress={()=>beforeOnPress(item)}/>
                    )
                })
            }
        </AppContainer>
    )
};

export default Sidebar;
