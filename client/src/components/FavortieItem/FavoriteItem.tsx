import { FavoriteButton, FavoriteLabel } from './Style';

interface Props{
    title : string;
    onPress:()=>void;
    isClick : boolean
};

const FavoriteItem = ({title, onPress, isClick} : Props) =>{
    
    return(
        <FavoriteButton onClick={onPress}>
            <FavoriteLabel>{title}</FavoriteLabel>
        </FavoriteButton>
    );
};

export default FavoriteItem;