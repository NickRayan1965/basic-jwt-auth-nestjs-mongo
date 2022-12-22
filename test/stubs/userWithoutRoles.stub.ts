import { CreateUserDto } from '../../src/auth/dto';

export const userWithoutRolesStub = (): CreateUserDto => {
    return {
        email: 'user_without_roles@example.com',
        password: 'contraseña_no_roles1234',
        roles: [],
    };
};
