class RegisterPage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="register">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Register</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>



            <p>Participants are invited to register for participation only and/or for presentation.</p>
            <br> 
            <p class="with-bold">Registration is free.</p>
            <br> 
            <p>To register for presentation please submit your abstract (up to 300 words) to a specific session</p>
           
           
            <div class="button-container">
                <button class="styled-button">Register for participation here</button>
            </div>
            <div class="button-container">
                <button class="styled-button">Register for presentation here</button>
            </div>
        </div>
        `;
    }
}

customElements.define('register-page', RegisterPage);