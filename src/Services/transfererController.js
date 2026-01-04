import{findbyaccount} from"../Model/Data.js"

function checkuser(numCompte){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dest=findbyaccount(numCompte);
            if(dest){
                resolve(dest);
            }
            else{
                reject("user not found");
            }
        },100);
    });
}

function checksolde(exp,amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(exp.balance>=amount){
                resolve("solde suffisant");
            }
            else{
                reject("solde inffisant");
            }
        },100);
        
    });
}

function updatesolde(exp,dest,amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //double check de soldepour securite
            if(amount>0 ){
                exp.balance-=amount;
                dest.balance+=amount;
                resolve("solde updated");
            }
            else{
                reject("invalide amount");
            }
        },100);
    });
}

function addtransaction(exp,dest,amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let debit={ Date:new Date().toLocaleDateString(),Description:`Transfere to ${dest.name}`,Type:"Debit",ttype:"sortie",Montant:"-"+amount};
            let credit={ Date:new Date().toLocaleDateString(),Description:`Transfere from ${exp.name}`,Type:"Credit",ttype:"entree",Montant:amount};

            exp.transactions.push(debit);
            dest.transactions.push(credit);
            console.log("addddddddd");
            sessionStorage.setItem("user",JSON.stringify(exp));
            resolve("transaction successfuly added");

        },100);
    })
}


function transferer(exp,numCompte,amount){
    let destinataire=null;
    return checkuser(numCompte)
    .then((dest)=>{
        console.log("user found");
        destinataire=dest;
        return checksolde(exp,amount);})
    .then((message)=>{
        console.log(message);
        return updatesolde(exp,destinataire,amount);
    })
    .then((message)=>{
        console.log(message);
        return addtransaction(exp,destinataire,amount);
    })
    .catch((message)=>console.log(message));
}


export{transferer};