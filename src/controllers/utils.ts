


  const validateUsername = (username:string) => {

    
    // Validaciones del username
    if(typeof username !== "string") {
      return {
        validate: false,
        message: "username must be a string"
      }

    }
    else if(username.length < 3) {
      return {
        validate: false,
        message: "username must be at least 3 characters long"
      }

    } else {
      return {
        validate: true,
        message: "Username OK"
      }
    }
  }

  const validatePassword = (password:string) => {

    
    // Validaciones del password
    if(typeof password !== "string") {
      return {
        validate: false,
        message: "password must be a string"
      }

    }
    else if(password.length < 6) {
      return {
        validate: false,
        message: "password must be at least 6 characters long"
      }
    } else {
      return {
        validate: true,
        message: "Password OK"
      }
    }
  }



export default {
  validateUsername,
  validatePassword
}