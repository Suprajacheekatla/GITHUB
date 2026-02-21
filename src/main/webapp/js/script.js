document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    if(username === "admin" && password === "admin123") {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password!");
    }
});
