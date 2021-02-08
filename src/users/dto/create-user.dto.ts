import { IsNotEmpty, MaxLength, MinLength} from 'class-validator';

export class CreateUserDto {
    /**
     * This is users name 
     * @example 'Test'
     */
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    username: string;

    /**
     * This is users name 
     * @example 'Asdf!354f'
     */
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    password: string;
}
