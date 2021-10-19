import { SideType } from "utils/utils.index";

export const HOME = 'Home';
export const MYFAVORITE = 'My Favorite';
export const BALAD = 'Balad';
export const DANCE ='Dance';
export const INDIE = 'Indie';
export const JAZZ = 'Jass';
export const POP = 'Pop';
export const RNBSOUL = 'R&B / Soul';
export const RAPHIPHOP= 'Rap / HipHop';
export const ROCKMETAL = 'Rock / Metal';
export const SEARCH = 'SEARCH';

export type searchOption = {
    data : string;
    separate : string;
}

export const sideAction = (value : SideType, search ?: searchOption) => {

    return {
        type : value,
        value : value,
        data: search
    }
};
