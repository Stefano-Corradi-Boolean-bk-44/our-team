const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


/*
1. creo una funzione che legga tutto l'array di oggetti
2. una funzione si occuperà della generazione della card
3. stampo il tutto
4. al click del invio form creo un nuovo oggetto
5. puscho l'oggetto nella base dati
6. lo stampo a pagina
*/

const addBtn = document.getElementById('addMemberButton');
addBtn.addEventListener('click',addNewMember);

drawTeam();

function drawTeam(){

  /*
    1. ciclo la base dati
    2. delego a una funzione la creazione dell'HTML di ogni menbro del team
  */

  // ciclo la base dato con

  // ciclo for tradizionale:
  // for(let i = 0; i < team.length; i++){
  //   console.log(team[i]);
  // }

  // ciclo FOR IN
  // for(let index in team){
  //   console.log(team[index]);
  // }

  //resetto l'ambiete dove devo stampare l'elenco la prima volta
  document.querySelector('.team-container').innerHTML = '';

  // cilo FOR OF
  for(let member of team){
  //  console.log(member);
    drawTeamMember(member);
  }

}

function drawTeamMember(member){
 /*
  1. seleziono dove devo stampare il membro del team
  2. leggo il contenturo di team-container
  3. genero l'output HTML
  4. lo aggiungo all'HTML presente
 */

  const teamContainer = document.querySelector('.team-container');

  let prevContent = teamContainer.innerHTML;

  // sitassi ES6 -> destrutturazione dell'oggetto
  const {name, role, image} = member;

  prevContent +=
  `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
    </div>
  `;

  teamContainer.innerHTML = prevContent;

}

// funzione invocata dal click di addMemberButton
function addNewMember(){
  /*
    1. leggo i value degli input
    2. creo un object
    3. lo invio a drawTeamMember che lo stampa
  */

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const image = document.getElementById('image').value;

  // sintassi ES5
  /*const newTeamMember = {
    name: name,
    role: role,
    image: image
  }*/

  // sintassi ES6
  const newTeamMember = {
    name,
    role,
    image
  }

  console.log(newTeamMember);
  drawTeamMember(newTeamMember)

}