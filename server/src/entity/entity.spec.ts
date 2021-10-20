import { expect } from 'chai';
import dbRepo from '../common/utils/db.repo';

describe('entity test',()=>{

    describe('db connection test',()=>{
        
        it('db test success',(done)=>{
            new Promise(function(resolve, reject){
                resolve(dbRepo.getResult({
                    query : 'select count(*) as count from users',
                    params : ''
                }))
            }).then(function(result){
                expect(result[0].count).to.be.a('number');
                done();
            }).catch(function(e){
                console.error(e);
                process.exit(1);
            });
        })
    })

});
