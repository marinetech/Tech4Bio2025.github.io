class KeynoteSpeakersPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
          
         

       
            .speaker {
                margin-bottom: 40px;
            }

            .speaker-header {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }

            .parson-img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 20px;
                border: 3px solid #005f99;
            }

            .speaker-info {
                flex: 1;
            }

            .name {
                font-size: 1.5em;
                font-weight: bold;
                color: #005f99;
                margin-bottom: 5px;
            }

            .position {
                font-style: italic;
                margin-bottom: 10px;
                color: #666;
            }

            .title {
                font-weight: bold;
                margin-top: 10px;
                margin-bottom: 10px;
                color: #333;
            }

            @media (max-width: 600px) {
                .speaker-header {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .parson-img {
                    margin-right: 0;
                    margin-bottom: 15px;
                }
            }
        </style>

        <div class="keynote-container">
            <img src="img/Vertical wave.png" alt="Vertical wave" class="background-content-demos">

            <div class="demos-container">
                <img src="img/wave.png" alt="wave" class="wave">
                <h2 class="wave-line-h2">Keynote Speakers</h2>
                <img src="img/wave.png" alt="wave" class="wave miror">
            </div>

            <div class="speaker">
                <div class="speaker-header">
                    <img src="img/Jeff Neasham 29-02-24.jpg" alt="Jeff Neasham img" class="parson-img">
                    <div class="speaker-info">
                        <p class="name">Prof. Jeff Neasham</p>
                        <p class="position">Chair in Acoustic Signal Processing<br>
                        Head of Intelligent Sensing and Communication (ISC) Research Group</p>
                    </div>
                </div>
                <p class="title">Development of real-time passive acoustic detection systems for marine mammals</p>
                <p>
                    Professor Jeff Neasham graduated in electronic engineering from Newcastle University, Newcastle upon Tyne, UK, in 1994. He worked at Newcastle University from 1994 until 2007 as a Research Associate on research and commercial product development in underwater acoustic communication, sonar imaging, and wireless sensor networks, before taking up an academic post. He is currently Chair in Acoustic Signal Processing with the School of Engineering, Newcastle University, leading the Intelligent Sensing and Communications Research Group and directing the Sensors, Electromagnetics and Acoustics Laboratory (SEALab). He has published over 150 conference and journal publications, and his work on underwater acoustic communication and positioning has been commercialised by companies in the UK and Italy. His current research interests are in underwater acoustic signal processing and device design, wireless communication networks, passive acoustic detection/localisation and biomedical instrumentation.
                </p>
            </div>


            <p class="to-be-updated"></p>
        </div>
        `;
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);
