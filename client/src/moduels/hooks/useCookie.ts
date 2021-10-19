import { useState } from 'react';
import cookie from 'react-cookie';

export function useCookie(){
    
    function get(){
        return cookie;
    };

    function set(cookie : string){

    };

    function isCookie() :boolean{
        if(!cookie){
            return false;
        };
        
        return true;
    }

    return {
        get,
        set,
        isCookie
    };
};