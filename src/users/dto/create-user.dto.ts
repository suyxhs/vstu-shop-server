import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Саша' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'саша123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'sasha123@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
