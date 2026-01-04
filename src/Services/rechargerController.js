import {getUser, findCard ,saveUser} from "../Model/Data.js";


function updatesolde(user,card,amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const Balance = Number(user.balance);
            const Balancecard=Number(card.balance);
            const montant=Number(amount);
            
            if(Balancecard<montant){
                reject("solde carte insuffisant");
                return;
            }else if(montant>0){
                user.balance= Balance +montant;
                card.balance= Balancecard -montant;
                resolve("solde updated");
            }else{
                reject("erreur amount");
            }
            
        },100);
    })
}


function addTransaction(user,card,amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let credit={ Date:new Date().toLocaleDateString(),Description:`Recharge depuis carte ****${card.cardnumber.slice(-4)}`  ,Type:"Credit",ttype:"entree",Montant:amount};
            user.transactions.push(credit);
            console.log("addddddddd");
            sessionStorage.setItem("user",JSON.stringify(user));
            resolve("transaction successfuly added");

        },100);
    })
}

async function recharger(cardNumber,amount){

    //const realUser = findbyaccount(userSession.numCompte);
    const realUser=getUser();
    if (!realUser) throw "Utilisateur introuvable";

    const card=findCard(realUser,cardNumber);
    if(!card) throw "Carte introvable";
    
    await updatesolde(realUser,card,amount);
    await addTransaction(realUser,card,amount);
    
    saveUser(realUser);
    /*return updatesolde(user,card,amount)
    .then((message)=>{
        console.log(message);
        return addTransaction(user,card,amount);
    })
    .catch((message)=>{console.log(message)});*/
}


export{recharger}