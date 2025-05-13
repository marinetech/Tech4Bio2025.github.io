class OrganizingCommitteePage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <style>

            ul {
                list-style: none;
                padding: 0;
            }

            li {
                display: flex;
                margin-bottom: 40px;
            }

            .parson-img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 20px;
                border: 3px solid #005f99;
            }

            .name {
                font-size: 1.5em;
                font-weight: bold;
                color: #005f99;
                margin-bottom: 5px;
            }

            .title {
                font-weight: bold;
                margin-top: 15px;
                margin-bottom: 10px;
                color: #333;
            }

            @media (max-width: 600px) {
                li {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    
                }

                .parson-img {
                    margin-right: 0;
                    margin-bottom: 15px;
                }
            }
        </style>

        <div class="organizing-committee">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Organizing Committee</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>


             <ul>
                <li>
                    <img src="img/RoeePic10.jpeg" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Associate Prof. Roee Diamant,</p>
                        <p>Department of Marine Technologies, University of Haifa</p>
                        <p>Faculty of Electrical and Computing Engineeing, University of Zagreb</p>
                    </div>
                </li>
                <li>
                    <img src="img/AviadScheinin.jpg" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Dr. Aviad Shienin,</p>
                        <p>Department of Marine Biology, University of Haifa</p>
                        <p>Head of the Dolphin & Sea Educational Centre of IMMRAC, Ashdod</p>
                    </div>
                </li>
                    <li>
                        <img src="img/Shimrit.jpg" alt="parson" class="parson-img">
                        <div>
                        <p class="name">Mrs. Shimrit Haimzon,</p>
                        <p>School of Marine Sciences, University of Haifa</p>
                    </div>
                </li>
                <li>
                    <img src="img/ShlomiDahan.png" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Mr. Shlomi Dahan,</p>
                        <p>Department of Marine Technologies, University of Haifa</p>
                    </div>
                </li>
                <li>
                    <img src="img/IshayahuPewzner.png" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Mr. Ishayahu Pewzner,</p>
                        <p>Department of Marine Technologies, University of Haifa</p>
                    </div>
                </li>
            </ul>

        </div>
        `;
    }
}

customElements.define('organizing-committee-page', OrganizingCommitteePage);