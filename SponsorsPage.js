class SponsorsPage extends HTMLElement {
    connectedCallback() {
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
                        <p class="sponsor-name">ANL</p>
                        <p class="sponsor-title">Underwater Acoustic and Navigation Laboratory, University of Haifa
</p>
                    </li>

                    <li class="sponsor-item">
                        <img src="./img/LogoSchool.png" alt="LogoSchool" class="sponsor-logo">
                        <p class="sponsor-name">Haifa University</p>
                        <p class="sponsor-title">Charney School of Marine Sciences
</p>
                    </li>

                    <li class="sponsor-item">
                        <img src="./img/LogoMorrisKahn.png" alt="LogoMorrisKahn" class="sponsor-logo">
                        <p class="sponsor-name">Morris Kahn</p>
                        <p class="sponsor-title">Morris Kahn Marine Research Station, University of Haifa
</p>
                    </li>

                    <!--
                    <li class="sponsor-item">
                        <img src="./img/labust_logo.png" alt="labust_logo" class="sponsor-logo">
                        <p class="sponsor-name">labust</p>
                        <p class="sponsor-title">Haifa University</p>
                    </li>
                    -->

                    <li class="sponsor-item">
                        <img src="./img/UWIN_LABUST_logo.jpg" alt="UWIN_LABUST_logo" class="sponsor-logo">
                        <p class="sponsor-name">UWIN</p>
                        <p class="sponsor-title">ERA CHAIR IN INTERNET OF UNDERWATER THINGS AT LABUST1 
</p>
                    </li>

                    <li class="sponsor-item">
                        <img src="./img/MarbleLogo.jpg" alt="MarbleLogo" class="sponsor-logo">
                        <p class="sponsor-name">Marble</p>
                        <p class="sponsor-title">entre of Excellence in Maritime Robotics and Technologies
for Sustainable Blue Economy</p>
                    </li>

                </ul>
            </div>
        `;
    }
}

customElements.define('sponsors-page', SponsorsPage);