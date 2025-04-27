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

            <div class="speaker">
                <div class="speaker-header">
                    <img src="img/Fraser Dalgleish.png" alt="Fraser Dalgleish img" class="parson-img">
                    <div class="speaker-info">
                        <p class="name">Dr Fraser Dalgleish</p>
                        <p class="position">Chief Technology Officer at BeamSea Associates in Palm Beach (FL)<br>
                         a maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles.</p>
                    </div>
                </div>
                <p class="title">In situ LiDAR remote sensing: Powerful new observing tools for marine biology.</p>
                <p>
                    Dr Fraser Dalgleish currently serves as Chief Technology Officer at BeamSea Associates in Palm Beach (FL) a maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles. 

Prior to that he served as Senior Scientist in the Photonics and Quantum Sciences Core Technology Center within the Space and Airborne Systems business segment at L3Harris Technologies. He was in this role for over 6 years leading multiple initiatives in R&D of novel photonic devices and materials, guiding the development of photonic assemblies to meet emerging customer interests in quantum sensors, low-SWaP LiDAR and advanced free space optical communications (FSOC) techniques. 

Before taking an industry position, he was a Research Faculty at Harbor Branch Oceanographic Institute, a campus of Florida Atlantic University. He was in this role for more than 13 years, where he founded the Ocean Visibility and Optics Laboratory, an engineering research lab and test facility specializing in R&D of laser and LiDAR instrumentation for marine science applications and development and validation of a suite of undersea radiative transfer computer models.
                </p>
            </div>

            <p class="to-be-updated"></p>
        </div>
        `;
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);
