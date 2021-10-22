import Log from '../../common/utils/log.repo';
import connection, { dbConnectionType } from '../../common/utils/db.repo';
import { IUserEntity } from '../../common/interfaces/entity';
import { UserEntityType } from '~/common/types';

export class User implements IUserEntity{
    private id : string;
    private email : string;
    private name :string;
    private thumnail :string;
    private insta_url :string;
    private password : string;
    public dbConn : dbConnectionType;

    setId(id : string) : this{
        this.id = id;
        return this;
    };

    setPassword(password:string) :this{
        this.password = password;
        return this;
    }

    setEmail(email : string) : this{
        this.email = email;
        return this;
    };

    etName(name : string) : this{
        this.name = name;
        return this;
    };

    setThumnail(thumnail :string) : this{
        this.thumnail = thumnail;
        return this;
    };

    setInstaId(instaId : string) :this{
        this.insta_url= instaId;
        return this;
    };

    async beforeLogic() : Promise<this>{
        return this;
    };

    // 유저 생성
    async createUser() : Promise<void>{
        try{
            this.dbConn = await connection.setConnection();
            await this.dbConn.query(CREATE_USER,
                              `${this.email},
                               ${this.password},
                               ${this.name},
                               ${this.thumnail},
                               ${this.insta_url}`);
        }catch(e){
            new Log()
            .setDescription(e)
            .setErrType('error')
            .setTitle('entity : create user')
            .create();
            throw new Error('entity error');
        }finally{
            this.dbConn.release();
        }
    };

    // 해당 유저 가져오기
    async getUser() : Promise<UserEntityType> {
        try{
            this.dbConn = await connection.setConnection();
            const [row] = await this.dbConn.query(GET_USER,
                              `${this.id}`)
            return row[0].id;
        }catch(e){ 
            new Log()
            .setDescription(e)
            .setErrType('error')
            .setTitle('entity : getUser')
            .create();
            throw new Error('entity error');
        }finally{
            this.dbConn.release();
        }
    };
};

/** query */
const CREATE_USER = 
"insert\
 into Users(email,password, name, thumnail, insta_url)\
 values(?,?,?,?,?)";

const GET_USER = 
"select *\
 from users\
 where id = ?";

