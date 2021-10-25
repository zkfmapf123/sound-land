import { Router, Request, Response} from "express";
import { DatabaseRepository } from "../../common/index";
import { Controller } from "../../common/interfaces/controller";
import routerPath from "../../common/router.path";

export class AuthController implements Controller{
    dbConn : DatabaseRepository = new DatabaseRepository();
    path: string = routerPath.AUTH;
    router: Router = Router();

    constructor(){
        this.initRoutes();
    };

    initRoutes(){
        const router : Router = Router();

        router.post(routerPath.LOGIN,this.login);
        router.post(routerPath.JOIN,this.join);
        router.post(routerPath.FORGET_EMAIL,this.getEmail);
        router.post(routerPath.FORGET_PASSWORD,this.getPassword);

        this.router.use(this.path, router);
    };

    login(req : Request, res :Response){
        res.send('home');
    };

    join(req : Request, res :Response){
        
    };

    getEmail(req : Request, res :Response){

    };

    getPassword(req : Request, res :Response){

    };
}