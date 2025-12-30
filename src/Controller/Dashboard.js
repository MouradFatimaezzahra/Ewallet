import{finduser} from "../Model/Data.js"

const welcome=document.getElementById("welcome_message");
const balance=document.getElementById("balance");
const tbody=document.querySelector("#transactions tbody");

const user=JSON.parse(sessionStorage.getItem("user"));

welcome.textContent="Welcome "+user.name;

balance.textContent=user.balance+"MAD";

//////////////////////////////
tbody.innerHTML="";

const selecting=document.createElement("select");
const cas1=document.createElement("option");
cas1.textContent="sortie";

const cas3=document.createElement("option");
cas3.textContent="tous";

selecting.appendChild(cas3);

selecting.appendChild(cas1);

const cas2=document.createElement("option");
cas2.textContent="entree";

selecting.appendChild(cas2);

tbody.appendChild(selecting);

//////////////////////////////
afficher(user.transactions);

selecting.addEventListener("change",()=>{

  let tranFilt = user.transactions;

  if(selecting.value==="entree"){
    tranFilt=user.transactions.filter(t=>t.ttype==="entree");
  } else if(selecting.value==="sortie") {
    tranFilt=user.transactions.filter(t=>t.ttype==="sortie");
  }

  afficher(tranFilt);
});


//////////////////////////////
function afficher(transactions) {
  tbody.innerHTML=""; 
  tbody.appendChild(selecting); 

  transactions.forEach(t=>{
    const row=document.createElement("tr");
    const tddate=document.createElement("td");
    tddate.textContent=t.Date;
    const tddescription=document.createElement("td");
    tddescription.textContent=t.Description;
    const tdtype=document.createElement("td");
    tdtype.textContent=t.Type;
    const tdmontant=document.createElement("td");
    tdmontant.textContent=t.Montant;
    row.append(tddate,tddescription,tdtype,tdmontant);
    tbody.appendChild(row);
  });
}
//////////////////////////////



const btnRecharger = document.getElementById("recharger");
const btnTransferer = document.getElementById("transferer");
const btnPayer = document.getElementById("payer");

btnPayer.addEventListener("click",()=>{
  window.location.href="../View/payer.html";
});