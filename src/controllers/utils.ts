


  const validateUsername = (username:string) => {

    
    // Validaciones del username
    if(typeof username !== "string") {
      return {
        validate: true,
        message: "username must be a string"
      }

    }
    else if(username.length < 3) {
      return {
        validate: true,
        message: "username must be at least 3 characters long"
      }

    } else {
      return {
        validate: false,
        message: ""
      }
    }
  }

  const validatePassword = (password:string) => {

    
    // Validaciones del password
    if(typeof password !== "string") {
      return {
        validate: true,
        message: "username must be a string"
      }

    }
    else if(password.length < 6) {
      return {
        validate: true,
        message: "password must be at least 6 characters long"
      }
    } else {
      return {
        validate: false,
        message: ""
      }
    }
  }



export default {
  validateUsername,
  validatePassword
}