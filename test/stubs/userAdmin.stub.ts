import { ValidRoles } from '../../src/auth/interfaces';
import { CreateUserDto } from '../../src/auth/dto';

export const userAdminStub = (): CreateUserDto => {
    return {
        email: 'userAdmin@example.com',
        password: 'contraseñaAdmin1234',
        roles: [ValidRoles.admin, ValidRoles.employed],
    };
};
