import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../user/user.entity';
import { AuthService } from '../auth.service';
import { JWTPayload } from '../dto/jwt.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'JWT') {
  constructor(private readonly authService: AuthService, private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  validate(payload: JWTPayload): Promise<User> {
    return this.authService.verify(payload);
  }
}
