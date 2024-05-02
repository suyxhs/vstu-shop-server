import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
  @ApiProperty({ example: 'Саша' })
  username: string;

  @ApiProperty({ example: 'саша123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Саша',
        password: 'саша123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Саша' })
  username: string;

  @ApiProperty({ example: 'sasha123@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Саша' })
  username: string;

  @ApiProperty({
    example: '$2b$10$tNw6GIHhiL/jSrsap1XXeO96OaNz1Ic8bjO44cJBXbzcoJy5iu7I.',
  })
  password: string;

  @ApiProperty({ example: 'sasha123@gmail.com' })
  email: string;

  @ApiProperty({ example: '2024-04-30T00:18:42.423Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-04-30T00:18:42.423Z' })
  createdAt: string;
}