import { useState } from "react";
import { MusicSeparateType } from "utils/utils.index";

type UserDto = {
    email :string;
    password : string;
    favoriteTag : MusicSeparateType[] | undefined;
    thumnail :string;
    nickname : string;
}

export function useAuth(){
    const [email, setEmails] = useState<string>('');
    const [password, setPasswords] = useState<string>('');
    const [passwordCheck, setPasswordChecks] = useState<string>('');
    const [nickname, setNicknames] = useState<string>('');
    const [thumnail, setThumnails] = useState<string>('');
    const [favoriteTag, setFavoriteTags] = useState<MusicSeparateType[] | undefined>(undefined);

    // user
    function getUser(){
        
        return {
            email,
            password,
            nickname,
            thumnail,
            favoriteTag
        }
    }

    // email
    function getEmail(){
        return email;
    };

    function setEmail(e : any){
        setEmails(e.target.value);
    };

    // password
    function getPassword(){ 
        return password;
    };

    function setPassword(e: any){
        setPasswords(e.target.value);
    };

    // password check
    function getPasswrod2(){
        return passwordCheck;
    };

    function setPassword2(e : any){
        setPasswordChecks(e.target.value);
    };

    // 이메일 유효한지?
    function isValidEmail() : boolean{
        try{
            return true;
            throw new SyntaxError();
        }catch(e){
            throw e;
        }
    };

    // 비밀번호 유효한지?
    function isValidPassword() : boolean{
        try{
            return true;
            throw new RangeError();
        }catch(e){
            throw e;
        }
    };

    // name
    function getName() :string{
        return nickname;
    };

    function setName(e :any){
        setNicknames(e.target.value)
    };

    // music favorite
    function setMusicFavorites(){

    };

    // thumnail
    function setThumnail(){

    };

    return {
        getEmail,
        setEmail,
        getPassword,
        setPassword,
        getPasswrod2,
        setPassword2,
        isValidEmail,
        isValidPassword,
        
        getName,
        setName,
        setMusicFavorites,
        setThumnail,
        getUser
    }

};
