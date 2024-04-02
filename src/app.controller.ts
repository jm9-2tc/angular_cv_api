import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDTO } from './model/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCvData(): string {
    return this.appService.getCvData();
  }

  @Post('/send-message')
  sendMessage(@Body() message: MessageDTO): void {
    this.appService.sendMessage(message);
  }
}
