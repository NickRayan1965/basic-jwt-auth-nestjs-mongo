import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const validRoles: string[] = this.reflector.get(
            META_ROLES,
            context.getHandler(),
        );
        if (validRoles.length === 0) return true;
        const user = context.switchToHttp().getRequest().user;
        if (!user)
            throw new InternalServerErrorException(
                'Usuario no encontrado (request)',
            );
        for (const role of validRoles) {
            if (user.roles.includes(role)) return true;
        }
        throw new ForbiddenException(
            `El Usuario necesita un rol válido: [${validRoles}]`,
        );
    }
}
