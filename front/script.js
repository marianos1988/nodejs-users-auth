


const register = async () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;


    let objectRegister = {
                
        method : "POST",
        body : JSON.stringify({
            username: username,
            password: password
        }),
        headers : {
            "Content-type" : "application/json"
        }
    }

    const response = await fetch(`http://localhost:3000/register`,objectRegister)
    const message = await response.json();

    document.querySelector("#message").textContent = message;

}

const login = async () => {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    let objectRegister = {
                
        method : "POST",
        body : JSON.stringify({
            username: username,
            password: password
        }),
        headers : {
            "Content-type" : "application/json"
        }
    }

    const response = await fetch(`http://localhost:3000/login`,objectRegister)
    const message = await response.json();

    document.querySelector("#message").textContent = message.message;
    console.log(message.token)
}

document.querySelector("#login").addEventListener("click", login)

document.querySelector("#register").addEventListener("click", register);