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
                cursor: pointer; /* Indicate it's clickable */
            }

            .abstract {
                display: none; /* Hidden by default */
                margin-top: 10px;
                color: #555;
                font-size: 0.95em;
                line-height: 1.6;
            }

            /* Popup Styles */
            .popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }

            .popup-content {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 80%;
                max-height: 80%;
                overflow-y: auto;
                position: relative;
            }

            .popup-title {
                font-size: 1.5em;
                font-weight: bold;
                color: #005f99;
                margin-bottom: 10px;
            }

            .popup-abstract {
                color: #333;
                line-height: 1.6;
            }

            .popup-close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 1.2em;
                cursor: pointer;
                color: #666;
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

                .speaker-info {
                    text-align: center;
                }

                .name {
                    font-size: 1.1em;
                }

                .position {
                    font-size: 0.85em;
                }

                .title {
                    text-align: center;
                    font-size: 1em;
                    margin-top: 8px;
                    margin-bottom: 8px;
                }

                .popup-content {
                    max-width: 95%;
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
                <p class="title" data-abstract="${`Professor Jeff Neasham graduated in electronic engineering from Newcastle University, Newcastle upon Tyne, UK, in 1994. He worked at Newcastle University from 1994 until 2007 as a Research Associate on research and commercial product development in underwater acoustic communication, sonar imaging, and wireless sensor networks, before taking up an academic post. He is currently Chair in Acoustic Signal Processing with the School of Engineering, Newcastle University, leading the Intelligent Sensing and Communications Research Group and directing the Sensors, Electromagnetics and Acoustics Laboratory (SEALab). He has published over 150 conference and journal publications, and his work on underwater acoustic communication and positioning has been commercialised by companies in the UK and Italy. His current research interests are in underwater acoustic signal processing and device design, wireless communication networks, passive acoustic detection/localisation and biomedical instrumentation.`}">
                    Development of real-time passive acoustic detection systems for marine mammals
                </p>
                <p class="abstract">
                    Professor Jeff Neasham graduated in electronic engineering from Newcastle University, Newcastle upon Tyne, UK, in 1994. He worked at Newcastle University from 1994 until 2007 as a Research Associate on research and commercial product development in underwater acoustic communication, sonar imaging, and wireless sensor networks, before taking up an academic post. He is currently Chair in Acoustic Signal Processing with the School of Engineering, Newcastle University, leading the Intelligent Sensing and Communications Research Group and directing the Sensors, Electromagnetics and Acoustics Laboratory (SEALab). He has published over 150 conference and journal publications, and his work on underwater acoustic communication and positioning has been commercialised by companies in the UK and Italy. His current research interests are in underwater acoustic signal processing and device design, wireless communication networks, passive acoustic detection/localisation and biomedical instrumentation.
                </p>
            </div>

            <div class="speaker">
                <div class="speaker-header">
                    <img src="img/Fraser Dalgleish.png" alt="Fraser Dalgleish img" class="parson-img">
                    <div class="speaker-info">
                        <p class="name">Dr Fraser Dalgleish</p>
                        <p class="position">Chief Technology Officer at BeamSea Associates in Palm Beach (FL)<br>
                            A maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles.</p>
                    </div>
                </div>
                <p class="title" data-abstract="${`Dr Fraser Dalgleish currently serves as Chief Technology Officer at BeamSea Associates in Palm Beach (FL) a maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles.

Prior to that he served as Senior Scientist in the Photonics and Quantum Sciences Core Technology Center within the Space and Airborne Systems business segment at L3Harris Technologies. He was in this role for over 6 years leading multiple initiatives in R&D of novel photonic devices and materials, guiding the development of photonic assemblies to meet emerging customer interests in quantum sensors, low-SWaP LiDAR and advanced free space optical communications (FSOC) techniques.

Before taking an industry position, he was a Research Faculty at Harbor Branch Oceanographic Institute, a campus of Florida Atlantic University. He was in this role for more than 13 years, where he founded the Ocean Visibility and Optics Laboratory, an engineering research lab and test facility specializing in R&D of laser and LiDAR instrumentation for marine science applications and development and validation of a suite of undersea radiative transfer computer models.`}">
                    In situ LiDAR remote sensing: Powerful new observing tools for marine biology.
                </p>
                <p class="abstract">
                    Dr Fraser Dalgleish currently serves as Chief Technology Officer at BeamSea Associates in Palm Beach (FL) a maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles.

Prior to that he served as Senior Scientist in the Photonics and Quantum Sciences Core Technology Center within the Space and Airborne Systems business segment at L3Harris Technologies. He was in this role for over 6 years leading multiple initiatives in R&D of novel photonic devices and materials, guiding the development of photonic assemblies to meet emerging customer interests in quantum sensors, low-SWaP LiDAR and advanced free space optical communications (FSOC) techniques.

Before taking an industry position, he was a Research Faculty at Harbor Branch Oceanographic Institute, a campus of Florida Atlantic University. He was in this role for more than 13 years, where he founded the Ocean Visibility and Optics Laboratory, an engineering research lab and test facility specializing in R&D of laser and LiDAR instrumentation for marine science applications and development and validation of a suite of undersea radiative transfer computer models.
                </p>
            </div>

              <div class="speaker">
                <div class="speaker-header">
                    <img src="img/Gašper Beguš.JPG" alt="Gašper Beguš img" class="parson-img">
                    <div class="speaker-info">
                        <p class="name">Prof. Gašper Beguš</p>
                        <p class="position">Associate Professor & College Principal University of California, Berkeley<br>
                            Interpretability is the new frontier in AI research. Understanding how generative models learn and how they resemble or differ from humans can not only provide insights for the study of human language and cognition, but can also facilitate discovery of novel patterns in diverse fields. For this purpose, it is essential to both introspect LLMs that test the limits of neural computation as well as to develop deep neural models that learn more like human infants acquiring language.  In this talk, I outline a more realistic model of human language acquisition and outline an AI interpretability technique (called CDEV) that allows us to establish a causal relationship between individual neurons and linguistically meaningful properties. Using the proposed technique, we can compare and evaluate artificial and biological neural processing of language. Additionally, I show that AI interpretability techniques can facilitate scientific discovery by uncovering previously unrecognized patterns in complex data types. I will argue that sperm whales have analogues to human vowels. This discovery was predicted, but not fully described, by the proposed AI interpretability technique. I will also show that the so-called coda vowels feature several behavioral parallels with human vowels, such as coarticulation and prominence in sub-coda structure.
</p>
                    </div>
                </div>
                <p class="title" data-abstract="${`Gašper Beguš is an Associate Professor at the University of California, Berkeley, where he bridges the fields of linguistics, artificial intelligence, and cognitive science. His research centers on interpretable AI and the study of language in humans, animals, and machines. Dr. Beguš leads efforts to develop techniques that help us better understand the inner workings of AI. In his Berkeley Speech and Computation lab, he also builds the most realistic models of human language learning—creating an artificial baby language learner. Serving as the Linguistics Lead at Project CETI, a non-profit dedicated to listening to sperm whales, he researches one of the most intriguing communication systems in the animal kingdom. His recent research discovered that sperm whales have equivalents to human vowels. His research has been featured in numerous press outlets, including the Financial Times, The Atlantic, National Geographic, Quanta Magazine, Harvard Magazine, Noema Magazine, and others. Dr. Beguš regularly appears as an invited speaker in diverse venues such as NYU Stern School of Business, Centre Pompidou, the National Science Foundation, and the Santa Fe Institute. His models inspired parts of the La Biennale di Venezia exhibition and a science fiction book for young audiences.`}">
                    AI Interpretability for Marine Biology.
                </p>
                <p class="abstract">Gašper Beguš is an Associate Professor at the University of California, Berkeley, where he bridges the fields of linguistics, artificial intelligence, and cognitive science. His research centers on interpretable AI and the study of language in humans, animals, and machines. Dr. Beguš leads efforts to develop techniques that help us better understand the inner workings of AI. In his Berkeley Speech and Computation lab, he also builds the most realistic models of human language learning—creating an artificial baby language learner. Serving as the Linguistics Lead at Project CETI, a non-profit dedicated to listening to sperm whales, he researches one of the most intriguing communication systems in the animal kingdom. His recent research discovered that sperm whales have equivalents to human vowels. His research has been featured in numerous press outlets, including the Financial Times, The Atlantic, National Geographic, Quanta Magazine, Harvard Magazine, Noema Magazine, and others. Dr. Beguš regularly appears as an invited speaker in diverse venues such as NYU Stern School of Business, Centre Pompidou, the National Science Foundation, and the Santa Fe Institute. His models inspired parts of the La Biennale di Venezia exhibition and a science fiction book for young audiences.</p>
            </div>

            <div id="popup-container"></div>
        </div>

        <template id="popup-template">
            <div class="popup-overlay">
                <div class="popup-content">
                    <button class="popup-close-btn">&times;</button>
                    <h3 class="popup-title"></h3>
                    <p class="popup-abstract"></p>
                </div>
            </div>
        </template>
        `;
        this.attachEventListeners();
    }

    attachEventListeners() {
        const titles = this.querySelectorAll('.title');
        const popupContainer = this.querySelector('#popup-container');
        const popupTemplate = this.querySelector('#popup-template');

        titles.forEach(title => {
            title.addEventListener('click', () => {
                const abstractText = title.dataset.abstract;
                const speakerElement = title.closest('.speaker');
                const speakerName = speakerElement.querySelector('.name').textContent;
                this.showPopup(speakerName, title.textContent, abstractText, popupContainer, popupTemplate);
            });
        });
    }

    showPopup(speakerName, titleText, abstractText, container, template) {
        const popup = template.content.cloneNode(true);
        const popupOverlay = popup.querySelector('.popup-overlay');
        const popupContent = popup.querySelector('.popup-content');
        const popupTitle = popup.querySelector('.popup-title');
        const popupAbstract = popup.querySelector('.popup-abstract');
        const closeButton = popup.querySelector('.popup-close-btn');

        popupTitle.textContent = titleText;
        popupAbstract.textContent = abstractText;

        closeButton.addEventListener('click', () => {
            container.removeChild(popupOverlay);
        });

        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                container.removeChild(popupOverlay);
            }
        });

        container.appendChild(popupOverlay);
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);