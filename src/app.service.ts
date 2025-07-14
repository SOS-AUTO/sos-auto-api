import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getApiInfo(req: Request) {
    return {
      name: 'SOS AUTO API',
      status: 'OK',
      environment: process.env.NODE_ENV || 'UNKNOWN',
      timestamp: new Date().toISOString(),
      platform: this.detectPlatform(req),
      documentationUrl: `${this.getBaseUrl(req)}/api-docs`, 
    };
  }

  private detectPlatform(req: Request): string {
    const host = req.headers.host?.toLowerCase() || '';
    if (host.includes('guincho')) return 'TOWING_COMPANY';
    if (host.includes('seguro')) return 'INSURANCE_COMPANY';
    if (host.includes('oficina')) return 'MECHANIC_SHOP';

    return 'GENERAL';
  }

  private getBaseUrl(req: Request): string {
    const protocol = req.protocol;
    const host = req.headers.host;
    return `${protocol}://${host}`;
  }
}
