import { UserEntityType } from '../types';
import { dbConnectionType } from '../utils/db.repo';

export interface IEntity {
    dbConn : dbConnectionType;
};

export interface IUserEntity extends IEntity{
    createUser() : Promise<void>;   
    getUser() : Promise<UserEntityType>;
};
