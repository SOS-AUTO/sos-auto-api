import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginPasswordDto } from './dto/login-password.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/password')
  @ApiOperation({ summary: 'Login with email and password (Supabase)' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async loginWithPassword(@Body() dto: LoginPasswordDto) {
    return this.authService.loginWithPassword(dto);
  }
}
