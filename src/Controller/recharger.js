import{recharger} from"../Services/rechargerController.js"

const montantinput=document.getElementById("montant");
const passinput=document.getElementById("password");
const rechargerbtn=document.getElementById("recharger");
const cardNumber=document.getElementById("numbercard");

let user=JSON.parse(sessionStorage.getItem("user"));



rechargerbtn.addEventListener("click",handlerecharger);

function handlerecharger(){
    let amount=Number(montantinput.value);
    let pass=String(passinput.value.trim());
    let card=cardNumber.value.trim();

    if(amount<=0 ||pass==="" || card===""||pass!==String(user.password)){
        alert("invalide data");
        return;
    }
    recharger(card,amount)
    .then(()=>{
        alert("recharge avec succes");
        window.location.href="../View/dashboard.html";
    })
    .catch((message)=> alert(message));

}