import { LoginUserDto } from '../../src/auth/dto';
import { User } from '../../src/auth/entities/user.entity';
import { PartialType } from '@nestjs/swagger';

export interface UserAndUserCredentials {
    credential: UserCredential;
    user: User;
}
export class UserCredential extends PartialType(LoginUserDto) {
    [k: string]: any;
}
