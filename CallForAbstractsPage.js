class CallForAbstractsPage extends HTMLElement {

constructor() {
        super();
        this.data = [
            { "header": "June 24th, 13:00-16:00, Room 108, Multidiciplinary building.", "sub":"“Remote Sensing to Monitor Climate Changes”", "text": "The workshop will delve into the innovative applications of remote sensing technologies in understanding and addressing climate change. Key topics will include the processing of mooring data, which is crucial for tracking oceanographic conditions over time, the detection of pollution to identify and mitigate environmental contaminants, and the characterization of sea currents to better understand ocean dynamics and their impact on global and local climate patterns. This conference aims to bring together experts and researchers to share insights, methodologies, and advancements in remote sensing, fostering collaboration and driving forward the efforts to monitor and combat climate change effectively." },
            { "header": "June 24th, 13:00-16:00, Room 108, Multidiciplinary building.", "sub":"“Bio-logging to Study Pelagic Predators”", "text": "" },
            { "header": "June 24th, 13:00-16:00, Room 108, Multidiciplinary building.", "sub":"“Remote Sensing to Monitor Climate Changes”", "text": "The workshop will delve into the innovative applications of remote sensing technologies in understanding and addressing climate change. Key topics will include the processing of mooring data, which is crucial for tracking oceanographic conditions over time, the detection of pollution to identify and mitigate environmental contaminants, and the characterization of sea currents to better understand ocean dynamics and their impact on global and local climate patterns. This conference aims to bring together experts and researchers to share insights, methodologies, and advancements in remote sensing, fostering collaboration and driving forward the efforts to monitor and combat climate change effectively." },
            { "header": "June 24th, 13:00-16:00, Room 108, Multidiciplinary building.", "sub":"“Remote Sensing to Monitor Climate Changes”", "text": "The workshop will delve into the innovative applications of remote sensing technologies in understanding and addressing climate change. Key topics will include the processing of mooring data, which is crucial for tracking oceanographic conditions over time, the detection of pollution to identify and mitigate environmental contaminants, and the characterization of sea currents to better understand ocean dynamics and their impact on global and local climate patterns. This conference aims to bring together experts and researchers to share insights, methodologies, and advancements in remote sensing, fostering collaboration and driving forward the efforts to monitor and combat climate change effectively." },
            { "header": "June 24th, 13:00-16:00, Room 108, Multidiciplinary building.", "sub":"“Remote Sensing to Monitor Climate Changes”", "text": "The workshop will delve into the innovative applications of remote sensing technologies in understanding and addressing climate change. Key topics will include the processing of mooring data, which is crucial for tracking oceanographic conditions over time, the detection of pollution to identify and mitigate environmental contaminants, and the characterization of sea currents to better understand ocean dynamics and their impact on global and local climate patterns. This conference aims to bring together experts and researchers to share insights, methodologies, and advancements in remote sensing, fostering collaboration and driving forward the efforts to monitor and combat climate change effectively." },

        ];
    }






    connectedCallback() {
        this.innerHTML = `
            <div class="call-for-abstracts">
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