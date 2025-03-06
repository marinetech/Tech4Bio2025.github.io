class HomePage extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="home">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <p>The multidisciplinary revolution in science did not skip over marine biology and engineering. Today, we understand marine ecosystems in ways that were previously unimaginable. Tools such as remote sensing, satellite imaging, and aerial and marine robotics allow scientists to study vast and often inaccessible areas of the ocean and obtain detailed data on biodiversity, species behavior and environmental changes.</p>
            <br> 
            <p> These technologies also help with real-time monitoring, such as detecting pollutants or tracking the eKects of climate change on the marine environment. By harnessing these tools, marine biologists can make more informed conservation decisions, protect endangered species and better manage marine resources for the future.</p>
            <br> 
            <p>The 2025 Haifa Tech4Bio Workshop will bring together experts, students and decision makers to showcase the achievements of combining technology and marine biology and to explore the challenges ahead. The Tech4Bio workshop will be a two-day event comprising of five units:</p>

            <ol style="list-style-type: none; counter-reset: item;">
                <li>keynote speakers</li>
                <li>poster session</li>
                <li>four parallel sessions</li>
                <li>expert panel discussion future directions in using technologies for marine biology research</li>
                <li>demos of underwater technologies related to marine biology</li>
            </ol>
             <div class="button-container">
                <button class="styled-button" id="WorkshopProgramButton">Workshop Program</button>
            </div>


            <div class="imgs-row">
                <img src="img/row1.jpeg" alt="img/row1" >
                <img src="img/row2.jpg" alt="img/row2" >
                <img src="img/row3.jpeg" alt="img/row3" >

            </div>
       
        </div>
        `;


              this.querySelector('#WorkshopProgramButton').addEventListener('click', () => {
                window.open('Tech4BioPlan.pdf', '_blank'); 
            });
    
            this.style.display = 'block'; 
            this.style.width = '100%'; 
            this.style.boxSizing = 'border-box'; 
            this.style.padding = '10px'; 
    

            const images = this.querySelectorAll('.imgs-row img');
            images.forEach(img => {
                img.style.width = '100%'; 
                img.style.marginBottom = '10px'; 
            });
   

    }
}

customElements.define('home-page', HomePage);