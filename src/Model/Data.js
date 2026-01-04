
let users=[
    {
        numCompte:111111,
        name:"Mohammed",
        mail:"med@gmail.com",
        password:"1234",
        balance:16200,
        transactions:[
            {
                Date:"24/04/2024",Description:"Salaire",Type:"Credit",ttype:"entree",Montant:"3000"
            },
            {
                Date:"13/05/2024",Description:"Achat",Type:"Debit",ttype:"sortie",Montant:"-500"
            },
            {
                Date:"26/05/2024",Description:"Abonnement Internet",Type:"Debit",ttype:"sortie",Montant:"-50"
            }  
        ],
         cards:[
            {cardnumber:"44445555",holder:111111,balance:5000},
            {cardnumber:"55556666",holder:111111,balance:3000}
        ]

    },
    {
        numCompte:222222,
        name:"Bouchra",
        mail:"Paula@gmail.com",
        password:"ddd",
        balance:20454,
        transactions:[
            {
                Date:"24/04/2024",Description:"Salaire",Type:"Credit",ttype:"entree",Montant:"3000"
            },
            {
                Date:"13/05/2024",Description:"Achat",Type:"Debit",ttype:"sortie",Montant:"-500"
            },
            {
                Date:"26/05/2024",Description:"Abonnement Internet",Type:"Debit",ttype:"sortie",Montant:"-50"
            }  
        ],
        cards:[
            {cardnumber:"33334444",holder:222222,balance:2000},
            {cardnumber:"11110000",holder:222222,balance:6000}
        ]

    },
    {
        numCompte:333333,
        name:"Teteme",
        mail:"fati@gmail.com",
        password:"ffff",
        balance:14464,
        transactions:[
            {
                Date:"24/04/2024",Description:"Salaire",Type:"Credit",ttype:"entree",Montant:"3000"
            },
            {
                Date:"13/05/2024",Description:"Achat",Type:"Debit",ttype:"sortie",Montant:"-500"
            },
            {
                Date:"26/05/2024",Description:"Abonnement Internet",Type:"Debit",ttype:"sortie",Montant:"-50"
            }  
        ],
        cards:[
            {cardnumber:"22221111",holder:333333,balance:5000},
            {cardnumber:"11112222",holder:333333,balance:3000}
        ]

    }
];


function finduser(mail,password){
    let user=null;
    user=users.find((u)=>u.mail===mail && u.password===password);
    return user;
}

function findbyaccount(numCompte){
    return users.find((u)=>String(u.numCompte)===String(numCompte));
    
}

function findCard(user,cardNumber){
    if(!user.cards ||!Array.isArray(user.cards)) return undefined;

    return user.cards.find(u=>(String(u.cardnumber).trim())===(String(cardNumber).trim()));
}


function getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
}
function saveUser(user){
    sessionStorage.setItem("user",JSON.stringify(user));
}

export{finduser,findbyaccount,findCard ,saveUser,getUser}