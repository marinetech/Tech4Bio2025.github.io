class SocialEventPage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Social Event</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>



            <p>Join us on a “cool” informal trip to the Cineret, the Sea of Galilee. The Cineret is known for its shimmering blue waters and surrounding hills. We will explore the fuana and biofauna of the lake and cool off from the heat in the famous “Magrace" river. Participants of this activity will be contacted directly for further details.</p>
            
            <div class="button-container">
                <button class="styled-button">Register</button>
            </div>
        </div>
        `;
    }
}

customElements.define('social-event-page', SocialEventPage);