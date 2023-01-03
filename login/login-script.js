const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    const username = document.getElementById("login__username").value;
    const password = document.getElementById("login__password").value;
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('password',password);
    window.location.href = "../formula-bucket/index.html";
})