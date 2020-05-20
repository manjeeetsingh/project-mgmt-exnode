export class ResponseHandler {
  static success(data?: any, message?: string) {
    return { statusCode: 200, data: data, message: message };
  }

  static successCreated(data?: any, message?: string) {
    return { statusCode: 201, data: data, message: message };
  }

  static successAccepted(data?: any, message?: string) {
    return { statusCode: 202, data: data, message: message };
  }

  static successNoContent(message?: string) {
    return { statusCode: 204, message: message };
  }

  static badRequest(message?: string, error?: any) {
    return { statusCode: 400, message: message, error: error };
  }

  static unauthorized(message?: string, error?: any) {
    return { statusCode: 401, message: message, error: error };
  }

  static forbidden(message?: string, error?: any) {
    return { statusCode: 403, message: message, error: error };
  }

  static conflict(message?: string, error?: any) {
    return { statusCode: 409, message: message, error: error };
  }
  static serverError(message?: string, error?: any) {
    return { statusCode: 500, message: message, error: error };
  }
}
