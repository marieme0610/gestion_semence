
const paysans = [
    {
        id: 1,
        nom: "Samba DIOP",
        localite: "Saloum",
        culture: "Riz",
        Semence: "250",
        fertilisant: "340",
        date: "06/09/2026",
    },
      {
         id: 2,
        nom: "Aliou DIOP",
        localite: "Bakel",
        culture: "Riz",
        Semence: "250",
        fertilisant: "340",
        date: "06/09/2026",
    },
      {
         id: 3,
        nom: "Joe DIOP",
        localite: "Thies",
        culture: "Riz",
        Semence: "250",
        fertilisant: "340",
        date: "06/09/2026",
    }
]

const loginPage = document.querySelector(".loginPage");
const btnLogin = document.querySelector(".btnLogin");
const sign = document.querySelector(".sign");
const inscrire = document.querySelector(".inscrire");
const dashboard = document.querySelector(".dashboard");
const insriReussi = document.querySelector(".insriReussi");
const reconnect = document.querySelector(".reconnect");
const loginConnecter = document.querySelector("#loginConnecter");
const mdpConnecter = document.querySelector("#mdpConnecter");
const prenom = document.querySelector("#prenom");
const login = document.querySelector("#login");
const mdp = document.querySelector("#mdp");


const tbody = document.querySelector("tbody");
const ide = document.querySelector("#ide");
const nom = document.querySelector("#nomm");
const localite = document.querySelector("#localite");
const culture = document.querySelector("#culture");
const semence = document.querySelector("#semence");
const fertilisant = document.querySelector("#fertilisant");
const date = document.querySelector("#date");
let dateD = new Date();
let jour = dateD.getDate();
let mois = dateD.getMonth() + 1; 
let annee = dateD.getFullYear();
let dateFormat = `${jour}/${mois}/${annee}`;

loginPage.style.overflow = "hidden";
inscrire.style.overflow = "hidden";
inscrire.style.display = "none";
dashboard.style.display = "none";
console.log("bonjour");



btnLogin.addEventListener("click",()=>{
    let loginValue = loginConnecter.value;
    let mdpValue = mdpConnecter.value;
   let users = JSON.parse(localStorage.getItem("users")) || [];

let verif = users.find(
    el => el.email === loginValue && el.mdp === mdpValue
);

if(verif){
    alert("Connexion réussie");
    inscrire.style.display = "none";
    loginPage.style.display = "none";
    dashboard.style.display = "flex";
}else{
    alert("Vous n'avez pas de compte");
}

})

sign.addEventListener("click", ()=>{
    inscrire.style.display = "flex";
    loginPage.style.display = "none";
})

insriReussi.addEventListener("click", () => {

    let insNom = nom.value;
    let insEmail = login.value;
    let insMdp = mdp.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existe = users.some(
        user => user.email === insEmail
    );

    if (existe) {
        alert("Vous avez déjà un compte");
    } else {

        let nouveau = {
            nom: insNom,
            email: insEmail,
            mdp: insMdp
        };

    
        users.push(nouveau);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Inscription réussie !");

        inscrire.style.display = "none";
        loginPage.style.display = "flex";
    }
});

  reconnect.addEventListener("click", ()=>{
                inscrire.style.display = "none";
                loginPage.style.display = "flex";
            })



function tabPaysan(tab){
    tab.forEach(element => {
    let tr = document.createElement("tr");    
    tr.innerHTML += `   <td>${element.id}</td>
                        <td>${element.nom}</td>
                        <td>${element.localite}</td>
                        <td>${element.culture}</td>
                        <td>${element.Semence}</td>
                        <td>${element.fertilisant}</td>
                        <td>${dateFormat}</td>
                        
                        `
    tbody.append(tr);                    
    });
}

let sort = true;

nom.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.nom.localeCompare(b.nom) :
            b.nom.localeCompare(a.nom) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     })
   
localite.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.localite.localeCompare(b.localite) :
            b.localite.localeCompare(a.localite) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     })   
     
culture.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.culture.localeCompare(b.culture) :
            b.culture.localeCompare(a.culture) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     }) 
     
semence.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.semence.localeCompare(b.semence) :
            b.semence.localeCompare(a.semence) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     }) 
     
fertilisant.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.fertilisant.localeCompare(b.fertilisant) :
            b.fertilisant.localeCompare(a.fertilisant) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     }) 
     
date.addEventListener("click", ()=>{
         paysans.sort((a,b)=>{
            return sort ?
            a.date.localeCompare(b.date) :
            b.date.localeCompare(a.date) ;
        })
        sort = !sort;
        tbody.innerHTML = "";
        tabPaysan(paysans)
     })       

tabPaysan(paysans);
