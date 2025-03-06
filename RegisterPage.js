class RegisterPage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="register">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

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
                <button class="styled-button" id="participationButton">Register for participation here</button>
            </div>
            
            <div class="button-container">
                <button class="styled-button" id="presentationButton">Register for presentation here</button>
            </div>

        </div>
        `;

        this.querySelector('#participationButton').addEventListener('click', () => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1zmGaGMqQF8z0jZPNyPCDSie4jBqE4b_XeLvePuFjRmqpcg/viewform?usp=sharing', '_blank');
        });

        this.querySelector('#presentationButton').addEventListener('click', () => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSchOn0FnAg2ZCC9fwKODYFYQzrT1ZO6fI6YXmekWqeB3upodA/viewform?usp=dialog', '_blank');
        });
    }
}

customElements.define('register-page', RegisterPage);

/*


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1zmGaGMqQF8z0jZPNyPCDSie4jBqE4b_XeLvePuFjRmqpcg/viewform?embedded=true" width="640" height="716" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

https://docs.google.com/forms/d/e/1FAIpQLSe1zmGaGMqQF8z0jZPNyPCDSie4jBqE4b_XeLvePuFjRmqpcg/viewform?usp=sharing

https://docs.google.com/forms/d/e/1FAIpQLSchOn0FnAg2ZCC9fwKODYFYQzrT1ZO6fI6YXmekWqeB3upodA/viewform?usp=dialog

*/