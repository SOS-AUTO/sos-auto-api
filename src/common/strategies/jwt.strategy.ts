import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'default_secret', 
    });
  }

  async validate(payload: any) {
    // Payload que definimos ao gerar o token no AuthService
    return {
      userId: payload.sub,
      role: payload.role,
      partnerType: payload.partnerType || null,
    };
  }
}
