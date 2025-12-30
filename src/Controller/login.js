
import{finduser} from "../Model/Data.js"

const mailinput=document.getElementById("mail");
const passinput=document.getElementById("password");
const result=document.getElementById("result");
const submitbtn=document.getElementById("submitbtn");

submitbtn.addEventListener("click",handlesubmit);


function handlesubmit(){
    let mail=mailinput.value;
    let password=passinput.value;
    let user=null;
    result.textContent="Verification...";

    setTimeout(() => {
        if(!mail || !password){
            result.textContent="Email ou password incorrect !!!";
            result.style.color="red";
        }
        else{
            user=finduser(mail,password);
            if(mail===user.mail && password===user.password){
                sessionStorage.setItem("user",JSON.stringify(user));
                result.textContent="succes!!!";
                result.style.color="green";
                setTimeout(() => {
                    window.location.href="/src/View/dashboard.html";
                }, 1000);
            }
            else{
                result.textContent="Email ou password incorrect !!!";
                result.style.color="red";
            }
        }
        
    }, 1000);
}


const loginicone=document.getElementById("display");

loginicone.addEventListener("click",()=>{
    if(passinput.value){
        if(passinput.type==="password"){
            passinput.type="text";
            loginicone.textContent="🙉👀";
        }
        else{
            passinput.type="password";
            loginicone.textContent="👁";
        }
    }
    
});