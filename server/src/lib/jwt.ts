import * as jwt from 'jsonwebtoken';
import config from '../config';

type JwtPayloadType = {
  email: string;
  privateId: number;
  nickname: string;
};

interface IJwt{
  sign(payload : JwtPayloadType, options?: jwt.SignOptions): string;
  verify(token : string, options?: jwt.SignOptions): string;
};

class JwtRepo implements IJwt {
  
  sign(payload: JwtPayloadType, options?: jwt.SignOptions) : string{
    return '';
  }
  
  verify(token: string, options?: jwt.SignOptions) :string{
    return '';
  }

}