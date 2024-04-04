import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { MessageDTO } from './model/message.dto';
import path from 'path';

@Injectable()
export class AppService {
  getCvData(): string {
    return fs.readFileSync(`${__dirname}/../test/assets/test-cv-data.json`).toString();
  }

  sendMessage(message: MessageDTO): void {
    console.log(`RECEIVED NEW MESSAGE (title: ${message.title}, author: ${message.author})`)
  }
}
