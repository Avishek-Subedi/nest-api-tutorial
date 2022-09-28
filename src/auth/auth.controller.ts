import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // create endpoint

  //post request

  @Post('signup') //post/signup/auth
  signup() {
    return { title: 'signed in', id: 123, 'is loggedIn': false };
  }

  @Post('signin')
  signin() {
    return 'I am signed in';
  }
}
