import { ForbiddenException } from '@nestjs/common';
import { Types } from 'mongoose';
import { UserDocument } from '../entities/user.entity';
import { ValidRoles } from '../interfaces';
interface MongoObject {
    _id: Types.ObjectId;
    [k: string]: any;
}
export const ValidateResourceOwner = (
    user: UserDocument,
    resourse: MongoObject,
    keyUser: string,
) => {
    if (
        user._id != resourse[keyUser].toString() &&
        !user.roles.includes(ValidRoles.admin)
    )
        throw new ForbiddenException(
            'El usuario no es el propietario de este recurso ni tiene los permisos para acceder al recurso',
        );
};
