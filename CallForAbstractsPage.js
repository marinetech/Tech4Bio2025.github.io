class CallForAbstractsPage extends HTMLElement {

    constructor() {
        super();
        this.data = [
            {
                header: 'June 24th, 13:00-16:00, Room 108, Multidiciplinary building.',
                sub: 'Remote Sensing to Monitor Climate Changes',
                text: 'The workshop will delve into the innovative applications of remote sensing technologies in understanding and addressing climate change. Key topics will include the processing of mooring data, which is crucial for tracking oceanographic conditions over time, the detection of pollution to identify and mitigate environmental contaminants, and the characterization of sea currents to better understand ocean dynamics and their impact on global and local climate patterns. This conference aims to bring together experts and researchers to share insights, methodologies, and advancements in remote sensing, fostering collaboration and driving forward the efforts to monitor and combat climate change effectively.'
            },
            {
                header: 'June 24th, 13:00-16:00, Room 270, Multidiciplinary building.',
                sub: 'Bio-logging to Study Pelagic Predators',
                text: 'The workshop will explore the cutting-edge techniques and technologies used to monitor and understand the behavior and physiology of pelagic predators. Participants will delve into satellite tracking methods to map the movement and identify hotspots of these marine animals, providing crucial data on their migratory patterns and habitat use. Additionally, the workshop will cover the use of sensors to assess the behavior and physiological responses of these predators, offering insights into their interactions with the environment and their role in the marine ecosystem. Another exciting topic will be bio-acoustic tracking, which employs both active and passive methodologies to monitor the presence and movements of these predators, adding a valuable dimension to the study of their behavior and communication. This workshop aims to equip researchers and practitioners with the knowledge and tools needed to advance the study of pelagic predators, fostering a deeper understanding of these vital components of oceanic biodiversity.'
            },
            {
                header: 'June 24th, 13:00-16:00, Room 252, Multidiciplinary building.',
                sub: 'Signal processing for biofauna exploration',
                text: 'The workshop will present new techniques for exploring the state of marine fauna. It will focus on applications such as remote sensing, database analysis, pattern recognition and classifications for monitoring. Examples include the analysis of species diversity and biomass of dolphins, whales, sea turtles and fish, the quantification of stress-related disturbances and ways to assess the health status of marine fauna in situ and in captivity. The workshop will also address the development of sensor technologies such as visual aids, acoustic transducers and robots for biofauna exploration. The aim is to bring together developers and users of marine research technologies and to expose the public to the amazing possibilities in this important field of research.'
              },
            {
                header: 'June 25th, 9:00-12:00, Israel Oceanographic and Limnological Research (IOLR), Shikmona Haifa.',
                sub: 'Demo & poster session',
                text: 'Share your developments in this handson session to showcase and demonstrate new technologies. The demo and poster session will be conducted in the IOLR main yard. Presenters will have the chance to show their developed instuments in an exhibition or to demonstrate them in the Marine Technologies Departmental salt water pool. Poster session will be held at the same time.'
            },
            {
                header: 'June 25th, 13:00-15:00, Israel Oceanographic and Limnological Research (IOLR), Shikmona Haifa.',
                sub: 'Marine technology session',
                text: `Join us for an exciting Marine Technology Workshop, where we’ll explore the latest advancements in underwater acoustics, navigation, and robotics. Whether you’re an engineer, researcher, or industry professional, this workshop offers a unique opportunity to gain hands-on experience with cutting-edge marine technologies, engage with experts in the field, and network with like-minded individuals. Discover how innovative solutions are shaping the future of ocean exploration, environmental monitoring, and maritime operations.`
            },

        ];
    }






    connectedCallback() {
        this.innerHTML = `
            <div class="call-for-abstracts">
                    <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

                <div class="demos-container">
                    <img src="img/wave.png" alt="" class="wave">
                    <h2 class="wave-line-h2">Call for Abstracts</h2>
                    <img src="img/wave.png" alt="" class="wave miror">
                </div>

                <p>The Tech4Bio workshop is a three-day event including keynote speakers, lecture sessions, posters and demos. Participants are invited to submit an 300 word abstract to the following sessions:</p>
                <br><br>

                <ul>
                    <li>
                        <p class="with-bold">${JSON.stringify(this.data[0].header)}</p>
                        <p class="with-color popup-trigger" data-popup-data='${JSON.stringify(this.data[0])}'>
                        ${JSON.stringify(this.data[0].sub)}
                        </p>
                    </li>
                    <li>
                        <p class="with-bold">${JSON.stringify(this.data[1].header)}</p>
                        <p class="with-color popup-trigger" data-popup-data='${JSON.stringify(this.data[1])}'>
                        ${JSON.stringify(this.data[1].sub)}
                        </p>
                    </li>
                    <li>
                        <p class="with-bold">${JSON.stringify(this.data[2].header)}</p>
                        <p class="with-color popup-trigger" data-popup-data='${JSON.stringify(this.data[2])}'>
                        ${JSON.stringify(this.data[2].sub)}
                        </p>
                    </li>
                    <li>
                        <p class="with-bold">${JSON.stringify(this.data[3].header)}</p>
                        <p class="with-color popup-trigger" data-popup-data='${JSON.stringify(this.data[3])}'>
                        ${JSON.stringify(this.data[3].sub)}
                        </p>
                    </li>
                    <li>
                        <p class="with-bold">${JSON.stringify(this.data[4].header)}</p>
                        <p class="with-color popup-trigger" data-popup-data='${JSON.stringify(this.data[4])}'>
                        ${JSON.stringify(this.data[4].sub)}
                        </p>
                    </li>

                  
                </ul>
            </div>
            <popup-page></popup-page>
        `;

        const popupTriggers = this.querySelectorAll('.popup-trigger');
        const popupPage = this.querySelector('popup-page');

        popupTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const data = JSON.parse(trigger.dataset.popupData);
                popupPage.open(data);
            });
        });
    }
}

customElements.define('call-for-abstracts-page', CallForAbstractsPage);