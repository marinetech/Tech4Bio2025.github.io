class DemosPage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="demos">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="" class="wave">
                <h2 class="wave-line-h2">Demos</h2>
                <img src="img/wave.png" alt="" class="wave miror">
            </div>
            

            <p>Demos and exhibition will be conducted at the IOLR/Shikmona facility between 9:00am and 12 on Wed, June 25.
            </p>
            <br> 
            
            <p>Listed demos are updated here.</p>

            <br> 
            <ul>
            <li>Underwater acoustic modem. Transmission of information package in the pool.</li>
            <br> 
            <li>Self-made hydrophones and projectors.</li>
            <br> 
            <li>Robotic floater for maine exploration. Demonstration in the pool.</li>
            <br> 
            <li>The A-18 6m long autonomeuols undewater vehicle (AUV).</li>
            <br> 
            <li>The SAAB workclass remotly operated vehicle (AUV).</li>
            <br> 
                <li>Acoustic tags implented in fish and sharks for tracking.</li>
            </ul>

        </div>
        `;
    }
}

customElements.define('demos-page', DemosPage);