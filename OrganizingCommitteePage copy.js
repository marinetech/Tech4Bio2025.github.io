class KeynoteSpeakersPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class=\"organizing-committee\">
        <img src=\"img/Vertical wave.png\" alt=\"Vertical wave\" class=\"background-content-demos\">

            <div class=\"demos-container\">
                <img src=\"img/wave.png\" alt=\"wave\" class=\"wave\">
                <h2 class=\"wave-line-h2\">Keynote Speakers</h2>
                <img src=\"img/wave.png\" alt=\"wave\" class=\"wave miror\">
            </div>

            <ul>
                <li>
                    <img src=\"img/Jeff Neasham 29-02-24.jpg\" alt=\"Jeff Neasham img\" class=\"parson-img\">
                    <div>
                        <p class=\"name\">Prof. Jeff Neasham</p>
                        <p>Chair in Acoustic Signal Processing </p>
                        <p>Head of Intelligent Sensing and Communication (ISC) Research Group</p>
                    </div>
                    <div class=\"title\">
                        Development of real-time passive acoustic detection systems for marine mammals
                    </div>
                    <p>
                        Professor Jeff Neasham graduated in electronic engineering from Newcastle University, Newcastle upon Tyne, UK, in 1994. He worked at Newcastle University from 1994 until 2007 as a Research Associate on research and commercial product development in underwater acoustic communication, sonar imaging, and wireless sensor networks, before taking up an academic post. He is currently Chair in Acoustic Signal Processing with the School of Engineering, Newcastle University, leading the Intelligent Sensing and Communications Research Group and directing the Sensors, Electromagnetics and Acoustics Laboratory (SEALab). He has published over 150 conference and journal publications, and his work on underwater acoustic communication and positioning has been commercialised by companies in the UK and Italy. His current research interests are in underwater acoustic signal processing and device design, wireless communication networks, passive acoustic detection/localisation and biomedical instrumentation.
                    </p>
                </li>
            </ul>

        </div>
        `;
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);
