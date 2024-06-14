export class HttpResponse {
    public static success(data: any, message = 'Success', statusCode = 200) {
      return {
        status: 'success',
        statusCode,
        message,
        data
      };
    }
  
    public static error(message: string, statusCode = 400) {
      return {
        status: 'error',
        statusCode,
        message
      };
    }
  }
  