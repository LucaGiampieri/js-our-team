const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//dichiaro la variabile in cui andrò ad inserire le card
const teamCards = document.getElementById('cardContainer');

//dichiaro le variabili di input del form
const nameMember = document.getElementById('name');
const roleMember = document.getElementById('role');
const emailMember = document.getElementById('email');
const imageMember = document.getElementById('image');
const form = document.getElementById('member-form');

//andiamo a crare una varibile cards dove andranno messe poi le singole card
let cards = '';

//vado a creare un ciclo che mi scorre l'array e che poi mi andrà a dare un output
for (let i = 0; i < teamMembers.length; i++){
  //creo una variabile in cui salvare i teamMebers iesimi
  const members = teamMembers[i];
  //faccio si che a ogni ciclo nella varibile cards venga aggiunta una card in scritta in HTML
  //vado ad inserire immagini, nomi, ruoli ed email
  cards += `<div class="card">
                <div class="card-photo">
                    <img src="./${members.img}" alt="${members.name}">
                </div>
                <div class="card-text">
                    <div class="card-name">${members.name}</div>
                    <div class="card-role">${members.role}</div>
                    <div class="card-email">${members.email}</div>
                </div>
            </div>`
}
//vado a stamapre a schermo le cards
 teamCards.innerHTML = cards;



