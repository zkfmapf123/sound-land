import cookie from 'react-cookie';

export function useCookie(){
    
    function get(){
        return cookie;
    };

    function set(cookie : string){

    };

    return {
        get,
        set
    };
};