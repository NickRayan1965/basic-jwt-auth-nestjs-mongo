import { LoginUserDto } from '../../src/auth/dto';

export const userCredentialsThatIsNotRegisteredStub = (): LoginUserDto => {
    return {
        email: 'emailNotExists@gmail.com',
        password: 'cualquierPassword',
    };
};
