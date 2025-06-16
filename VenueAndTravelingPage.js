class VenueAndTraveling extends HTMLElement { // Changed class name to DemosPage
    connectedCallback() {
        this.innerHTML = `
        <div class="demos">
        <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Venue & Traveling</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>



            <p>The workshop will be held in the multipurpose Building, University of Haifa (21/10) and in the IOLR, Shikmona Haifa (22/10).</p>
            <br> 
            <p>How to get to the multipurpose Building, University of Haifa?</p>
                    
            <p>Public transportation: Take a train or bus to the “Mercazit Hamifraz” station in Haifa and get on the legendary cable car that will take you up to the University of Haifa. The multipurpose Building is located in the eastern corner of the university. See map <here>.
Car: Enter "University of Haifa" in waze/google maps“. Park in one of the parking lots outside the university campus and walk across the pedestrian bridge to reach the university campus. Contact the workshop organizers if you need a parking permit inside the university.
</p>
            <br> 
            <p>How to get to the IOLR, Shikmona?</p>
            <p>Public transportation: Take a train or bus to “Hof Hacarmel” station in Haifa and take the Metronit light rail line 1 north to “Ein Hayam” station. Alternatively, travel to Bat Galim” station and take the Metronit light rail line 2 south to “Ein Hayam” station. Cross the pedestrian bridge towards the sea and follow the scenic road along the sea for 5 minutes until you reach the IOLR building. Follow the signs at the entrance.
By car: Enter “Israel Oceanographic and Limnological Research, Shikmona, Haifa” in waze/google maps. Park in the designated parking lot (no permit required) and walk to the entrance of the building
</p>
           <p></p>
           <p></p>
           
        </div>
        `;
    }
}

customElements.define('venue-and-traveling-page', VenueAndTraveling);