import { PartialType } from '@nestjs/swagger';
import { RegisterRequest } from './register.dto';

export class UpdateAuthDto extends PartialType(RegisterRequest) {}
