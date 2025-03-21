class SponsorsPage extends HTMLElement {
    connectedCallback() {
        const sponsers = [
            {
                img: "./img/ANL_logo.png",
                alt: "ANL_logo",
                sponsor_name: "Haifa University",
                sponsor_title: "Charney School of Marine Sciences"
            },
            {
                img: "./img/LogoSchool.png",
                alt: "LogoSchool",
                sponsor_name: "Haifa University",
                sponsor_title: "Charney School of Marine Sciences"
            },
            {
                img: "./img/LogoMorrisKahn.png",
                alt: "LogoMorrisKahn",
                sponsor_name: "Morris Kahn",
                sponsor_title: "Morris Kahn Marine Research Station, University of Haifa"
            },
            {
                img: "./img/labust_logo.png",
                alt: "labust_logo",
                sponsor_name: "labust",
                sponsor_title: "Haifa University"
            },
            {
                img: "./img/UWINLABUSTFINALhorizontalni1.png",
                alt: "UWIN_LABUST_logo",
                sponsor_name: "UWIN",
                sponsor_title: "ERA CHAIR IN INTERNET OF UNDERWATER THINGS AT LABUST1"
            },
            {
                img: "./img/CoE_Marble_pozitiv_horizontalni.png",
                alt: "MarbleLogo",
                sponsor_name: "Marble",
                sponsor_title: "entre of Excellence in Maritime Robotics and Technologies"
            }
        ]

        /*
              this.innerHTML = `
                  <div class="sponsors">
                      <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">
      
                      <div class="demos-container">
                          <img src="img/wave.png" alt="wave" class="wave">
                          <h2 class="wave-line-h2">Sponsors</h2>
                          <img src="img/wave.png" alt="wave" class="wave miror">
                      </div>
      
                      <ul class="sponsors-list">
      
                          <li class="sponsor-item">
                              <img src="./img/ANL_logo.png" alt="ANL_logo" class="sponsor-logo">
                             <div class="card-info">
                              <p class="sponsor-name">ANL</p>
                              <p class="sponsor-title">Underwater Acoustic and Navigation Laboratory, University of Haifa
      </p>
      </div>
      </li>
      
                          <li class="sponsor-item">
                          <img src="./img/LogoSchool.png" alt="LogoSchool" class="sponsor-logo">
                                                   <div class="card-info">
      
                                                   <p class="sponsor-name">Haifa University</p>
                                                   <p class="sponsor-title">Charney School of Marine Sciences
                                                   </p>
                                                   </div>
                          </li>
      
                          <li class="sponsor-item">
                              <img src="./img/LogoMorrisKahn.png" alt="LogoMorrisKahn" class="sponsor-logo">
                                                                          <div class="card-info">
       <p class="sponsor-name">Morris Kahn</p>
                              <p class="sponsor-title">Morris Kahn Marine Research Station, University of Haifa
      </p>
                                                   </div>
      
                          </li>
      
                          <!--
                          <li class="sponsor-item">
                              <img src="./img/labust_logo.png" alt="labust_logo" class="sponsor-logo">
                              <p class="sponsor-name">labust</p>
                              <p class="sponsor-title">Haifa University</p>
                          </li>
                          -->
      
                          <li class="sponsor-item">
                              <img src="./img/UWINLABUSTFINALhorizontalni1.png" alt="UWIN_LABUST_logo" class="sponsor-logo">
                              <p class="sponsor-name">UWIN</p>
                              <p class="sponsor-title">ERA CHAIR IN INTERNET OF UNDERWATER THINGS AT LABUST1 
      </p>
                          </li>
      
                          <li class="sponsor-item">
                              <img src="./img/CoE_Marble_pozitiv_horizontalni.png" alt="MarbleLogo" class="sponsor-logo">
                              <p class="sponsor-name">Marble</p>
                              <p class="sponsor-title">entre of Excellence in Maritime Robotics and Technologies
      for Sustainable Blue Economy</p>
                          </li>
      
                      </ul>
                  </div>
              `;
              */

        this.innerHTML = `
            <div class="sponsors">
                <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

                <div class="demos-container">
                    <img src="img/wave.png" alt="wave" class="wave">
                    <h2 class="wave-line-h2">Sponsors</h2>
                    <img src="img/wave.png" alt="wave" class="wave miror">
                </div>

                <ul class="sponsors-list" id="sponsorsList"></ul>
            </div>
        `;

        this.fillList(sponsers);
    }

    fillList(sponsers) {
        // Because the table is appended to ‘this’, we can find the <tbody>:
        const sponsorsList = this.querySelector('#sponsorsList');
        sponsorsList.innerHTML = '';

        sponsers.forEach(sponser => {
            sponsorsList.innerHTML += `
                <li class="sponsor-item">
                    <img src=${sponser.img} alt=${sponser.alt} class="sponsor-logo">
                   <div class="filler"></div>
                    <div class="card-info">
                        <p class="sponsor-name">${sponser.sponsor_name}</p>
                        <p class="sponsor-title">${sponser.sponsor_title}</p>
                    </div>
                </li>
            `;

        });
    }
}

customElements.define('sponsors-page', SponsorsPage);