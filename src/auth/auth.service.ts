import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto, CreateUserDto } from './dto';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { CreateOrLoginResponseDto } from './dto/create-or-login-response.dto';
import { JwtPayload } from './interfaces';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { handleExceptions } from '../common/errors/handleExceptions';
@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}
    async registerUser(
        createUserDto: CreateUserDto,
    ): Promise<CreateOrLoginResponseDto> {
        createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
        try {
            const user = await this.userRepository.create(createUserDto);
            const createUserResponse: CreateOrLoginResponseDto = {
                user,
                jwt: this.getJwt({ id: user._id.toString() }),
            };
            return createUserResponse;
        } catch (error) {
            handleExceptions(error, User.name);
        }
    }

    async loginUser(
        loginUserDto: LoginUserDto,
    ): Promise<CreateOrLoginResponseDto> {
        const { email, password } = loginUserDto;
        const user = await this.userRepository.findOne({ email });
        if (!user)
            throw new UnauthorizedException('Las credenciales no son válidas');
        if (!bcrypt.compareSync(password, user.password))
            throw new UnauthorizedException('Las credenciales no son válidas');
        if (!user.isActive)
            throw new UnauthorizedException(
                'El usuario se encuentra inactivo, hable con un administrador',
            );
        const loginUserResponse: CreateOrLoginResponseDto = {
            user,
            jwt: this.getJwt({ id: user._id.toString() }),
        };
        return loginUserResponse;
    }
    private getJwt(payload: JwtPayload) {
        return this.jwtService.sign(payload);
    }
}
