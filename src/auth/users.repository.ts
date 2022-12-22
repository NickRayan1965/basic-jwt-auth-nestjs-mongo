import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateUserDto } from './dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) {}
    async findById(id: string | Types.ObjectId): Promise<UserDocument> {
        return this.userModel.findById(id);
    }
    async findOne(userFilterQuery: FilterQuery<User>): Promise<UserDocument> {
        return this.userModel.findOne(userFilterQuery);
    }
    async findOneAndDelete(
        userFilterQuery: FilterQuery<User>,
    ): Promise<UserDocument> {
        return this.userModel.findOneAndDelete(userFilterQuery);
    }
    async find(userFilterQuery: FilterQuery<User>): Promise<UserDocument[]> {
        return this.userModel.find(userFilterQuery);
    }
    async create(user: CreateUserDto): Promise<UserDocument> {
        return this.userModel.create(user);
    }
    async findOneAndUpdate(
        userFilterQuery: FilterQuery<User>,
        user: Partial<User>,
    ): Promise<UserDocument> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user, {
            new: true,
        });
    }
}
