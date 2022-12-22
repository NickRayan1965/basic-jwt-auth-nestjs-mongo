import { CreateUserDto } from '../../src/auth/dto';
import { ValidRoles } from '../../src/auth/interfaces';

export const userStub = (): CreateUserDto => {
    return {
        email: 'test@example.com',
        password: 'contraseña1234',
        roles: [ValidRoles.admin, ValidRoles.employed],
    };
};
