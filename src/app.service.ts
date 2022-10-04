import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacaheManager: Cache) {}

  async getHello(ip: any): Promise<string> {
    await this.cacaheManager.set('test', { ip: '192.168.1.1 ' });
    await this.cacaheManager.set('client-ip', ip);
    const cachedItem = await this.cacaheManager.get('test');
    const cachedIp = await this.cacaheManager.get('client-ip');
    console.log(cachedIp);
    console.log(cachedItem);
    return 'Hello World!';
  }
}
