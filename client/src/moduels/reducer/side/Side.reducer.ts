import { searchOption } from "moduels/reducer.index";
import { MusicSeparateType } from "utils/utils.index";
import { MYFAVORITE, BALAD, DANCE, HOME, JAZZ, POP, RAPHIPHOP, RNBSOUL, ROCKMETAL, SEARCH } from "./Side.action";

export type SideReducerType = {
    sideReducer : {
        title : MusicSeparateType,
        data ?: searchOption;
    }
};

const sideReducerDefaultValue = {
    title : HOME,
    data :undefined
};

// reducer
export const sideReducer = (state = sideReducerDefaultValue, action :any) =>{

    console.log(action);
    state.title = action.value;

    if(action.value === SEARCH){
        state.data = action.data;
    }

    return {
        ...state
    }
};

