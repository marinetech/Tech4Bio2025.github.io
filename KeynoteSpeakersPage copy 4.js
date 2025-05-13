class KeynoteSpeakersPage extends HTMLElement {
    speakers = [
        {
          "name": "Prof. Jeff Neasham",
          "position": "Chair in Acoustic Signal Processing\nHead of Intelligent Sensing and Communication (ISC) Research Group",
          "title": "Development of real-time passive acoustic detection systems for marine mammals",
          "abstract": "Professor Jeff Neasham graduated in electronic engineering from Newcastle University, ...",
          "image": "img/Jeff Neasham 29-02-24.jpg"
        },
        {
          "name": "Dr Fraser Dalgleish",
          "position": "Chief Technology Officer at BeamSea Associates in Palm Beach (FL)\nA maritime photonics start-up...",
          "title": "In situ LiDAR remote sensing: Powerful new observing tools for marine biology.",
          "abstract": "Dr Fraser Dalgleish currently serves as Chief Technology Officer at BeamSea Associates in Palm Beach (FL)...",
          "image": "img/Fraser Dalgleish.png"
        },
        {
          "name": "Prof. Gašper Beguš",
          "position": "Associate Professor & College Principal University of California, Berkeley",
          "title": "Interpretability is the new frontier in AI research...",
          "abstract": "Interpretability is the new frontier in AI research. Understanding how generative models learn and how they...",
          "image": "img/Gašper Beguš.JPG"
        }
      ]
      
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
{for speker in spekers
            <div class="speaker">
                <div class="speaker-header">
                    <img src="img/{speker.image}" alt="{speker.image} img" class="parson-img">
                    <div class="speaker-info">
                        <p class="name">{speker.image}</p>
                        <p class="position">{speker.position)<br>
                            Head of Intelligent Sensing and Communication (ISC) Research Group</p>
                    </div>
                </div>
                <p class="title" data-abstract="${`Professor Jeff Neasham graduated in electronic engineering from Newcastle University, Newcastle upon Tyne, UK, in 1994. He worked at Newcastle University from 1994 until 2007 as a Research Associate on research and commercial product development in underwater acoustic communication, sonar imaging, and wireless sensor networks, before taking up an academic post. He is currently Chair in Acoustic Signal Processing with the School of Engineering, Newcastle University, leading the Intelligent Sensing and Communications Research Group and directing the Sensors, Electromagnetics and Acoustics Laboratory (SEALab). He has published over 150 conference and journal publications, and his work on underwater acoustic communication and positioning has been commercialised by companies in the UK and Italy. His current research interests are in underwater acoustic signal processing and device design, wireless communication networks, passive acoustic detection/localisation and biomedical instrumentation.`}">
                   {speker.title)
                </p>
                <p class="abstract">
                     {speker.abstract)
                </p>
            </div>

    }
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