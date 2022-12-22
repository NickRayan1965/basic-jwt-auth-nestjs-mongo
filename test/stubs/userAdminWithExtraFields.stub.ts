import { ValidRoles } from '../../src/auth/interfaces';
import { CreateUserDto } from '../../src/auth/dto';

export const userAdminWithExtraFieldsStub = (): CreateUserDto & {
    [k: string]: any;
} => {
    return {
        email: 'emailTest@example.com',
        password: 'contraseña1234',
        roles: [ValidRoles.admin, ValidRoles.employed],
        invalidField: 'este campo no debería existir',
    };
};
