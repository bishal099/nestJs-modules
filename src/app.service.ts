import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h2>Hello World from  Nestsaaa!</h2>';
  }
}
