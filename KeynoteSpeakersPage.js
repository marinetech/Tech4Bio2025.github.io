class KeynoteSpeakersPage extends HTMLElement {  
    connectedCallback() {
        this.innerHTML = `
        <div class="organizing-committee">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Keynote Speakers</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>


            <p class="to-be-updated">To be updated</p>

        </div>
        `;
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);