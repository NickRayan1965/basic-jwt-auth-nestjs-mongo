//import { ValidRoles } from '../../src/auth/interfaces';
import { CreateUserDto } from '../../src/auth/dto';

export const userWithoutOptionalFieldsStub = (): Partial<CreateUserDto> => {
    return {
        email: 'user_without_optional_fields@example.com',
        password: 'contraseñaAdmin1234',
    };
};
