class OrganizingCommitteePage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="organizing-committee">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Organizing Committee</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>



            <ul>
                <li>
                    <img src="img/wave.png" alt="parson" class="parson-img">
                    <div>
                    <p class="name">Associate Prof. Roee Diamant,</p>
                    <p>Department of Marine Technologies, University of Haifa</p>
                    <p>Faculty of Electrical and Computing Engineeing, University of Zagreb</p>
                    </div>
                </li>
                <li>
                    <img src="img/wave.png" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Dr. Aviad Shienin,</p>
                        <p>Department of Marine Biology, University of Haifa</p>
                        <p>Head of the Dolphin & Sea Educational Centre of IMMRAC, Ashdod</p>
                    </div>
                </li>
                <li>
                    <img src="img/wave.png" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Mr. Shlomi Dahan,</p>
                        <p>Department of Marine Technologies, University of Haifa</p>
                    </div>
                </li>
                <li>
                    <img src="img/wave.png" alt="parson" class="parson-img">
                    <div>
                        <p class="name">Mrs. Shimrit Haimzon,</p>
                        <p>School of Marine Sciences, University of Haifa</p>
                    </div>
                </li>
            </ul>

        </div>
        `;
    }
}

customElements.define('organizing-committee-page', OrganizingCommitteePage);