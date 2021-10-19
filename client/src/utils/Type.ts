export type MusicSeparateType = 
'Home'|
'Balad' |
'Dance' |
'Rap / HipHop' |
'Indie' |
'R&B / Soul' |
'Rock / Metal' |
'Pop' |
'Jass' |
'My Favorite' | 
'Search';

export type MusicSeparateClickType<T> = {
    music : T;
    isClick : boolean;
};