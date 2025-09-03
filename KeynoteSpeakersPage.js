class KeynoteSpeakersPage extends HTMLElement {
    speakers = [
        {
            name: "Dr Fraser Dalgleish",
            position: "Chief Technology Officer at BeamSea Associates in Palm Beach (FL)\nA maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles.",
            bio: "Dr Fraser Dalgleish currently serves as Chief Technology Officer at BeamSea Associates in Palm Beach (FL) a maritime photonics start-up who are pioneering cost effective and automated LiDAR imaging and sensing payloads for small unmanned maritime vehicles. Prior to that he served as Senior Scientist in the Photonics and Quantum Sciences Core Technology Center within the Space and Airborne Systems business segment at L3Harris Technologies. He was in this role for over 6 years leading multiple initiatives in R&D of novel photonic devices and materials, guiding the development of photonic assemblies to meet emerging customer interests in quantum sensors, low-SWaP LiDAR and advanced free space optical communications (FSOC) techniques. Before taking an industry position, he was a Research Faculty at Harbor Branch Oceanographic Institute, a campus of Florida Atlantic University. He was in this role for more than 13 years, where he founded the Ocean Visibility and Optics Laboratory, an engineering research lab and test facility specializing in R&D of laser and LiDAR instrumentation for marine science applications and development and validation of a suite of undersea radiative transfer computer models.",
            title: "In situ LiDAR remote sensing: Powerful new observing tools for marine biology.",
            abstract: "Advancements in LiDAR technology are transforming marine biology by enabling unprecedented in situ observations of underwater ecosystems. Traditional remote sensing methods often struggle with penetration and resolution in aquatic environments, but LiDAR offers a unique solution—with the potential to provide high-resolution, real-time data on species distribution, biomass estimation, and habitat structure. This talk will explore the latest applications of in situ LiDAR remote sensing, highlighting breakthroughs in studying marine organisms, tracking environmental changes, and supporting conservation efforts. As we push the boundaries of oceanographic research, LiDAR emerges as a powerful tool, offering fresh insights into the complexities of marine life.",
            image: "img/Fraser Dalgleish.png"
        },
        {
            name: "Dr Đula Nađ",
            position: "Assistant professor, Department of Control and Computer Engineering",
            bio: "Đula Nađ is an assistant professor at the Laboratory of Underwater Systems and Technologies (LABUST), part of the University of Zagreb Faculty of Electrical Engineering and Computing. During last 15 years he participated in over 15 national and international projects dealing with navigation, guidance and control of underwater vehicles. His research interest includes underwater navigation and localization aiding for diver-robot interaction scenarios.",
            title: "Wearable sensing and robotics for divers.",
            abstract: "Limited visibility, constant disturbances and technical equipment make human exploration of underwater environments challenging. While underwater robots can aid in these tasks, they cannot fully replace human presence in cognitive and fine manipulations tasks. Therefore, solutions to enable safer diving and interaction with robotic diving buddies are required. The lecture will showcase the current research efforts from the Laboratory for Underwater Systems and Technologies in this direction.",
            image: "img/Đula Nađ.jfif"
        }
        ,
        {
            name: "Dr Aviad Scheinin",
            position: "The Morris Kahn Marine Research Station, University of Haifa. \nHead of Dolphin & Sea  Educational Center of Delphis NGO",
            bio: "Head of the Marine Apex Predator Lab, specializing in the conservation, behavioral ecology, and long-term monitoring of coastal apex predators, including dolphins, sharks, rays, and bluefin tuna. His research addresses critical knowledge gaps in the Eastern Mediterranean Sea, with a focus on the ecological roles of apex predators as sentinels of marine ecosystem health. The lab develops innovative sampling protocols and indicators for pelagic megafauna, employing advanced methodologies such as drone-based photogrammetry, acoustic surveys, mark-recapture techniques, underwater observations, and molecular tools, including stable isotope analysis, and microbiome profiling.",
            title: "Technology in the aid of deciphering the marine apex predators of the easternmost Mediterranean Sea.",
            abstract: "This talk presents four marine apex predator case studies from Israel: coastal shark seasonal aggregation, Bluefin tuna breeding aggregation, the decline of the common dolphins population, and deep-diving sperm whales occurrence. It highlights how these examples help explore the use and limitations of technological tools in studying pelagic species. The speaker aims to shed light on both ecological insights and the challenges of marine monitoring.",
            image: "img/Dr_Aviad_Scheinin.jpeg"
        }
    ];

    connectedCallback() {
        this.render();
        this.attachEventListeners();
    }

    render() {
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

                .bio-container {
                    overflow: hidden;
                    max-height: 0;
                    transition: max-height 0.3s ease-in-out;
                    font-size: 0.75em;
                    margin-bottom: 10px;
                    color: #666;
                }

                .bio-container.open {
                    max-height: 500px; /* Adjust as needed */
                }

                .bio-toggle {
                    font-size: 0.75em;
                    color: #005f99;
                    text-decoration: underline;
                    cursor: pointer;
                    margin-top: 5px;
                    display: inline-block;
                }

                .title {
                    font-weight: bold;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: #2196f3;
                    cursor: pointer; /* Indicate it's clickable */
                    text-decoration: underline;
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

                    .bio-container {
                        font-size: 0.75em;
                    }

                    .bio-toggle {
                        font-size: 0.75em;
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

                ${this.speakers.map(speaker => `
                    <div class="speaker">
                        <div class="speaker-header">
                            <img src="${speaker.image}" alt="${speaker.name}" class="parson-img">
                            <div class="speaker-info">
                                <p class="name">${speaker.name}</p>
                                <p class="position">${speaker.position.replace(/\n/g, '<br>')}</p>
                                <div class="bio-container">
                                    <p class="bio">${speaker.bio.replace(/\n/g, '<br>')}</p>
                                </div>
                                <span class="bio-toggle">Read Bio</span>
                            </div>
                        </div>
                        <p class="title" data-abstract="${speaker.abstract.replace(/"/g, '&quot;')}">${speaker.title}</p>
                        <p class="abstract">${speaker.abstract}</p>
                    </div>
                `).join('')}

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
    }

    attachEventListeners() {
        const titles = this.querySelectorAll('.title');
        const popupContainer = this.querySelector('#popup-container');
        const popupTemplate = this.querySelector('#popup-template');
        const bioToggles = this.querySelectorAll('.bio-toggle');

        titles.forEach(title => {
            title.addEventListener('click', () => {
                const abstractText = title.dataset.abstract;
                const speakerElement = title.closest('.speaker');
                const speakerName = speakerElement.querySelector('.name').textContent;
                this.showPopup(speakerName, title.textContent, abstractText, popupContainer, popupTemplate);
            });
        });

        bioToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const bioContainer = toggle.previousElementSibling;
                bioContainer.classList.toggle('open');
                toggle.textContent = bioContainer.classList.contains('open') ? 'Read Less' : 'Read Bio';
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
            container.innerHTML = '';
        });

        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                container.innerHTML = '';
            }
        });

        container.appendChild(popupOverlay);
    }
}

customElements.define('keynote-speakers-page', KeynoteSpeakersPage);