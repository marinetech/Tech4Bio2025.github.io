class SocialEventPage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="demos">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Social Event</h2>
                <h3 class="wave-line-h2">(Oct 20)</h3>
                <img src="img/wave.png" alt="wave" class="wave miror">
                </div>



            <p>Join us on a “cool” informal trip to the Cineret, the Sea of Galilee. The Cineret is known for its shimmering blue waters and surrounding hills. We will explore the fuana and biofauna of the lake and cool off from the heat in the famous “Magrace" river. Participants of this activity will be contacted directly for further details.</p>
            
            <div class="button-container">
                <button class="styled-button" id="SocialEventButton">Register</button>
            </div>
        </div>
        `;
        this.querySelector('#SocialEventButton').addEventListener('click', () => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSfliA7uD_szBLtgtKxBUZ_0ScV3XZ4D7MuI7NrUqxDSnS2l1w/viewform?usp=dialog', '_blank');
        });
    }
}

customElements.define('social-event-page', SocialEventPage);

/*
https://docs.google.com/forms/d/e/1FAIpQLSfliA7uD_szBLtgtKxBUZ_0ScV3XZ4D7MuI7NrUqxDSnS2l1w/viewform?usp=dialog
*/

