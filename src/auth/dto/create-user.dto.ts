import {
    IsArray,
    IsEmail,
    IsIn,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { ValidRoles } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { DEFAULT_USER_ROLES } from '../entities/user.entity';

export class CreateUserDto {
    @ApiProperty({
        description: "Email para el usuario, solo email's válidos",
        uniqueItems: true,
        required: true,
    })
    @IsString()
    @IsEmail()
    readonly email: string;
    @ApiProperty({
        description: 'Contraseña para el usuario',
        minLength: 6,
        required: true,
    })
    @IsString()
    @MinLength(6)
    password: string;
    @ApiProperty({
        description: 'Lista de roles del usuario',
        enum: ValidRoles,
        required: false,
        default: DEFAULT_USER_ROLES,
    })
    @IsOptional()
    @IsArray()
    @IsIn([ValidRoles.admin, ValidRoles.employed], { each: true })
    readonly roles?: ValidRoles[];
}
