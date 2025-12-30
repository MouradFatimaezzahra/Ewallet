
let users=[
    {
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
        ]

    },
    {
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
        ]


    },
    {
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
        ]

    }
];


function finduser(mail,password){
    let user=null;
    user=users.find((u)=>u.mail===mail && u.password===password);
    return user;
}

export{finduser}