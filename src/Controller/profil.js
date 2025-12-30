
const Name=document.getElementById("name");
const email=document.getElementById("email");
const Balance=document.getElementById("montant");

const user=JSON.parse(sessionStorage.getItem("user"));

Name.textContent=user.name;
email.textContent=user.mail;
Balance.textContent=user.balance +"MAD";
