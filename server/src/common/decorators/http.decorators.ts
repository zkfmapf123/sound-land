import {request, Request, Response} from 'express';

export function getParams(req :Request, res :Response) {
    console.log(req.cookies);
};

export function getQueryString(req :Request, res :Response){

};

export function getBody(){
    return function(req :Request, res :Response){
        return req.body.data;
    }
};