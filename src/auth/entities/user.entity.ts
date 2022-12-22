import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ValidRoles } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
export const DEFAULT_USER_ROLES = [ValidRoles.employed];
export type UserDocument = User & Document;
@Schema({ versionKey: false })
export class User {
    @ApiProperty({
        type: String,
        uniqueItems: true,
        example: '6392342f99fa9d34bdc8b2c4',
        nullable: false,
    })
    _id?: Types.ObjectId;
    @ApiProperty({
        description: "Email para el usuario, solo email's válidos",
        uniqueItems: true,
        nullable: false,
    })
    @Prop({
        unique: true,
        required: true,
        index: 1,
        minlength: 5,
        maxlength: 150,
    })
    email: string;
    @ApiProperty({
        description: 'Contraseña para el usuario',
        minLength: 6,
        nullable: true,
    })
    @Prop({ required: true, minlength: 6 })
    password: string;
    @ApiProperty({
        description: 'Lista de roles del usuario',
        enum: ValidRoles,
        nullable: false,
        default: DEFAULT_USER_ROLES,
    })
    @Prop({ type: [String], required: true, default: DEFAULT_USER_ROLES })
    roles: string[];
    @ApiProperty({ description: 'Estado del registro', nullable: false })
    @Prop({ required: true, default: true })
    isActive: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
