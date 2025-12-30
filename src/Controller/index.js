
const loginbtn=document.getElementById("Loginbtn");

loginbtn.addEventListener("click",handlelogin);

function handlelogin(){
    loginbtn.textContent="Loading...";
    setTimeout(() => {
        window.location.href="../View/login.html";
    }, 1000);
}