import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto';
import { Auth } from './decorators';
import { ValidRoles } from './interfaces';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrLoginResponseDto } from './dto/create-or-login-response.dto';
@ApiTags('Auth')
@ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos enviados incorrectos',
})
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @ApiBearerAuth()
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: CreateOrLoginResponseDto,
        description: 'Usuario creado correctamente',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Usuario creado correctamente',
    })
    @ApiResponse({
        status: HttpStatus.FORBIDDEN,
        description: 'El Usuario necesita un rol válido para este endpoint',
    })
    @Post('register')
    @Auth(ValidRoles.admin)
    register(@Body() createAuthDto: CreateUserDto) {
        return this.authService.registerUser(createAuthDto);
    }
    @ApiResponse({
        status: HttpStatus.OK,
        type: CreateOrLoginResponseDto,
        description: 'Inicio de sesión correcto',
    })
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.loginUser(loginUserDto);
    }
}
