import { AppContainer } from './Style';
import React, { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import SideItem from 'components/SideItem/SideItem';
import { useDispatch, useSelector } from 'react-redux';
import { sideAction, SideReducerType } from 'moduels/reducer.index';
import { SideType } from 'utils/utils.index';
import { SideMenu } from 'utils/String';

const Sidebar = () =>{
    const dispatch = useDispatch();
    const sideState = useSelector((state : SideReducerType) => state);
    const [sideClick, setSideClick] = useState<number>(0);

    const beforeOnPress = (item : SideType) =>{

        dispatch(sideAction(item))
    }

    useEffect(() => {
        const SIDE = sideState.sideReducer.title as SideType;
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
            case 'Profile':
                return setSideClick(10);
            default:
                return setSideClick(-1);
        }
    }, [sideState]);

    return (
        <AppContainer>
            <Title/>
            {
                SideMenu.map(function(item, index){
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
