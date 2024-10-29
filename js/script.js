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

<div class="card text-bg-dark mb-3" style="max-width: 500px">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="assets/img/female1.png"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title">Marco Bianchi</h5>
        <p class="card-text">Designer</p>
        <a class="text-decoration-none" href="mailto:marcobianchi@team.com">
          marcobianchi@team.com
        </a>
      </div>
    </div>
  </div>
</div>;
