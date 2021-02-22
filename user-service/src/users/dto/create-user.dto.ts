import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  /**
   * This is users name
   * @example 'Test'
   */
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(10)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
