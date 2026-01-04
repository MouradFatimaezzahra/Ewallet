import {transferer} from "../Services/transfererController.js";

const numCompte=document.getElementById("NumCompte");
const montant=document.getElementById("amount");
const transfererbtn=document.querySelector("#transferer");

let exp=JSON.parse(sessionStorage.getItem("user"));

transfererbtn.addEventListener("click",handletransferer);


function handletransferer(){
    let numcompte=String(numCompte.value.trim());
    let amount=Number(montant.value);
    if(amount<=0 ||numcompte==="" ||String(exp.numCompte)===numcompte){
        console.log("if");
        alert("invalide data");
        return;
    }

    //appel a la fonction transferer
    transferer(exp,numcompte,amount)
    .then(()=>{
        alert("transfert successfly done");
        window.location.href="dashboard.html";
    })
    .catch((message)=>alert(message));
}
