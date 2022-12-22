//import { ValidRoles } from '../../src/auth/interfaces';
//import { CreateUserDto } from '../../src/auth/dto';

export const userAdminWithIncorrectDataStub = (): any => {
    return {
        email: 'emaili_nvalido.com',
        password: 123124,
        roles: true,
    };
};
