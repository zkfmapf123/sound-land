import React, { useEffect } from 'react';
import { SideItemButton, SideItemLabel } from './Style';
import { AiFillCrown, AiFillCustomerService, AiFillEdit, AiFillGift, AiFillGold, AiFillGolden, AiFillHome, AiFillPicture, AiFillRobot, AiFillRocket, AiFillSliders, AiFillStar } from 'react-icons/ai';
import {SideType} from '../../utils/utils.index';

interface Props{
    label : SideType;
    visible :boolean;
    onPress:()=>void;
}

const SideItem = ({label, visible, onPress} : Props) =>{

    return(
        <SideItemButton
          style={{
              backgroundColor : visible ? 'white' : 'black'
          }}
          onClick={onPress}>
            {
                label === 'Home' ? <AiFillHome style={IconsStyle(visible)}/> :
                label === 'My Favorite' ? <AiFillCrown style={IconsStyle(visible)}/> :
                label ===  'Balad' ? <AiFillCustomerService style={IconsStyle(visible)}/> :
                label === 'Dance' ? <AiFillEdit style={IconsStyle(visible)}/> :
                label === 'Indie' ? <AiFillGift style={IconsStyle(visible)}/> :
                label === 'Jass' ? <AiFillGolden style={IconsStyle(visible)}/> :
                label === 'Pop' ? <AiFillStar style={IconsStyle(visible)}/> :
                label === 'R&B / Soul' ? <AiFillRocket style={IconsStyle(visible)}/> :
                label === 'Rap / HipHop' ? <AiFillSliders style={IconsStyle(visible)}/> :
                label === 'Rock / Metal' ? <AiFillPicture style={IconsStyle(visible)}/> : <AiFillHome style={IconsStyle(visible)}/>
            }
            <SideItemLabel
                style={{
                    color : visible ? 'black' : 'white'
                }}
            >{label}</SideItemLabel>
        </SideItemButton>
    )
};

const IconsStyle = (visible: boolean) => {

    return {
        color : visible ? 'black' : 'white',
        fontSize : '20px',
        marginRight : '10px',
    }
}

export default SideItem;

