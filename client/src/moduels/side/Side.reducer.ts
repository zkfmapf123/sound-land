import { INDIE } from "moduels/reducer.index";
import { MusicSeparateType } from "utils/utils.index";
import { MYFAVORITE, BALAD, DANCE, HOME, JAZZ, POP, RAPHIPHOP, RNBSOUL, ROCKMETAL } from "./Side.action";

export type SideReducerType = {
    sideReducer : {
        title : MusicSeparateType
    }
};

const sideReducerDefaultValue = {
    title : HOME
};

// reducer
export const sideReducer = (state = sideReducerDefaultValue, action :any) =>{

    if(action.value === HOME ||
       action.value === MYFAVORITE || 
       action.value === BALAD ||
       action.value === DANCE || 
       action.value === JAZZ ||
       action.value === INDIE || 
       action.value === POP || 
       action.value === RNBSOUL || 
       action.value === RAPHIPHOP || 
       action.value === ROCKMETAL){
           state.title = action.value;
       }

    return {
        ...state
    }
};

