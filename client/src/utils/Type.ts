export type SideType =
    'Home' |
    'Balad' |
    'Dance' |
    'Rap / HipHop' |
    'Indie' |
    'R&B / Soul' |
    'Rock / Metal' |
    'Pop' |
    'Jass' |
    'My Favorite' |
    'Search' | 
    'Profile' | 
    'Upload';

export type MusicSeparateType = 
'Balad' |
'Dance' |
'Rap / HipHop' |
'Indie' |
'R&B / Soul' |
'Rock / Metal' |
'Pop' |
'Jass';

export type MusicSeparateClickType<T> = {
    music : T;
    isClick : boolean;
};

export type UserAuthDto = {
    id : number;
    thumnails : string;
    email :string;
}