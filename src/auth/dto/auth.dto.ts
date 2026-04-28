import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'a1eJ12jnKJnkjNJJ12084578KJdcnjk...',
  })
  accessToken: string;
}
