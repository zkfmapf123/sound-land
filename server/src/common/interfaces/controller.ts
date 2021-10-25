import { Router } from "express";
import { DatabaseRepository } from '../index';

export interface Controller{
  path: string;
  router: Router;
  dbConn : DatabaseRepository;
  initRoutes():void;
}