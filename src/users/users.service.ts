import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid} from 'uuid';
import { IUsersService } from './interfaces/IUsersService';

@Injectable()
export class UsersService implements IUsersService {

  private users: User[] = [];
 
  async create(createUserDto: CreateUserDto): Promise<User> {
    await new Promise((res) => {
      setTimeout(res, 5000)
    });
    const user = new User(uuid(), createUserDto.username, createUserDto.password);
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(user => user.id === id);
    if(!user) {
      throw new NotFoundException('User is not found');
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);

    user.username = updateUserDto.username ?? user.username;
    user.password = updateUserDto.password ?? user.password;
    return user;
  }

  remove(id: string): string {
    this.users = this.users.filter(user => user.id !== id);
    return id;
  }
}
