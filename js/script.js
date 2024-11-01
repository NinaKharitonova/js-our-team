const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// TODO: Funzione e recupero gli elementi

generateMemberCardHtml = (name, role, email, img) => {
  return `
     <div class="card text-bg-dark mb-3" style="max-width: 500px">
        <div class="row g-0">
           <div class="col-md-4">
                <img
                 src="../assets/${img}"
                 class="img-fluid rounded-start"
                 alt=""
                />
            </div>
            <div class="col-md-5">
              <div class="card-body">
                 <h5 class="card-title">${name}</h5>
                 <p class="card-text">${role}</p>
                <a class="text-decoration-none" href="mailto:marcobianchi@team.com">
                 ${email}
                </a>
              </div>
            </div>
        </div>
      </div>`;
};

const printMemberCards = (cardsTabel, members) => {
  let cardsHtml = ``;

  members.forEach((member) => {
    const { name, role, email, img } = member;
    const memberCardHtml = generateMemberCardHtml(name, role, email, img);
    cardsHtml += memberCardHtml;
  });

  cardsTabel.innerHTML = cardsHtml;
};

const cardsTabel = document.getElementById("our-team");
printMemberCards(cardsTabel, teamMembers);
