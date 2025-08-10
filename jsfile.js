document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert(`Welcome, ${username}!`);
    }
});
