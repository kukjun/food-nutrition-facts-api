import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    let errorMessage: any = exception.getResponse();
    console.log(errorMessage);

    if (typeof errorMessage === 'object') {
      errorMessage = errorMessage.message;
    }

    this.logger.error(
      `Error Occur ${request.url} ${request.method}, errorMessage: ${JSON.stringify(errorMessage, null, 2)}`,
    );

    const data: {
      status: number;
      error: string;
      path: string;
      message: string;
    } = {
      status,
      error: HttpStatus[status],
      path: request.url,
      message: errorMessage,
    };

    response.status(status).json(data);
  }
}
