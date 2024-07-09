 class ApiError extends Error {
    constructor(message, statusCode,error= [],stack = "") {
      super(message);
      this.statusCode = statusCode;
      this.name = 'ApiError';
      this.data = null;
      this.message = message;
      this.success = false;
      this.errors = errors;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
 }

 export {ApiError}