import { expect } from 'chai';
import dbRepo from '../common/utils/db.repo';
import { User } from './entity';
describe('entity test',()=>{

    describe('user entity test',()=>{
        const user = new User();
        const email = "zkfmapf123@naver.com";
        const password = "adsf";
        const thumnail = "adf";
        const instaUrl = "asdfasf";

        it('create user test',async(done)=>{
            try{
                user
                .setEmail(email)
                .setInstaId(instaUrl)
                .setThumnail(thumnail)
                .setPassword(password)
                await user.createUser();

                done();
            }catch(e){
                console.error(e);
                process.exit(1);
            }
        });

        it('get user test',(done)=>{
            done();
        });
    });

    describe('user song test',()=>{

    });

    describe('user song commenet test',()=>{

    });

    describe('user song group test',()=>{

    });

    describe('user group item test',()=>{

    });
});
