import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDTO } from './model/message.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCvData(@Res() res: Response): Response {
    return res
      .status(200)
      .contentType('application/json')
      .end(this.appService.getCvData())
  }

  @Post('/send-message')
  sendMessage(@Res() res: Response, @Body() message: MessageDTO): Response {
    this.appService.sendMessage(message);
    return res.status(201);
  }
}
