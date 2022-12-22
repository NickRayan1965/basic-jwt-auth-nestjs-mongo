import { ValidRoles } from '../../src/auth/interfaces';
import { CreateUserDto } from '../../src/auth/dto';

export const userWithOnlyEmployedRoleStub = (): CreateUserDto => {
    return {
        email: 'user_with_only_employed_role@example.com',
        password: 'contraseña_employed1234',
        roles: [ValidRoles.employed],
    };
};
