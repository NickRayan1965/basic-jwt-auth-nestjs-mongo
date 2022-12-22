import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateOrLoginResponseDto {
    @ApiProperty()
    user: User;
    @ApiProperty()
    jwt: string;
}
