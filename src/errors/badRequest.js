const CustomApiError = require("./customErrors")
const {StatusCodes} = require("http-status-codes")

class badRequest extends CustomApiError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = badRequest