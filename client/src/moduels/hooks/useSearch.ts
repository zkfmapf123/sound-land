import { SyntheticEvent, useState } from "react";

export function useSearch(v : string){
    const [value, setValue] = useState<string>(v);

    function get() : string{
        return value;
    };

    function set(e : any){
        setValue(e.target.value);
    };

    function setString(str : string){
        setValue(str);
    }

    return {
        get,
        set,
        setString,    
    }
};
