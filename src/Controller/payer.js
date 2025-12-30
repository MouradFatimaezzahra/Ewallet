import{finduser} from"../Model/Data.js"

const user=JSON.parse(sessionStorage.getItem("user"));

const btn=document.getElementById("payForm");
const balance=document.getElementById("balance");


balance.textContent=user.balance+" MAD ";

btn.addEventListener("click",()=>{

    const description=document.getElementById("description").value;
    const montant=Number(document.getElementById("montant").value);

    checkuser()
    .then(()=>checksolde(montant))
    .then(()=>addtransaction(description,montant))
    .then(()=>updatesolde(montant))
    .then(()=>{
        alert("Paiement effectue avec succes");
        window.location.href="../View/Dashboard.html"
    })
    .catch(erreur=> alert(erreur));

});
 

function checkuser(){
  return new Promise((resolve,reject)=>{
    const u=finduser(user.mail,user.password);
    if(u){
      resolve(u);
    }
    else{
      reject("user not found");
    }
  });
}

function checksolde(montant){
  return new Promise((resolve,reject)=>{
    if(montant<=0){
        reject("solde Invalide");
    }
    else if(user.balance<montant){
      reject("solde insuffisant");
    }
    else{
      resolve(montant);
    }
  });
}

function addtransaction(description,montant){
    return new Promise((resolve)=>{
        const transac={Date:new Date().toLocaleDateString(),Description:description,Type:"Debit",ttype:"sortie",Montant:"-"+montant}
        user.transactions.push(transac);
        resolve();
})
  }

function updatesolde(montant){
    return new Promise((resolve)=>{
        user.balance-=montant;
        sessionStorage.setItem("user",JSON.stringify(user));
        resolve();
    });
}

