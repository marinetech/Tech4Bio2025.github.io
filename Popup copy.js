class Popup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                /* העתק לכאן את סגנונות ה-CSS שלך מ-popup_style.css */
                .popup-trigger {
                    cursor: pointer;
                }

                .popup {
                    display: none;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.4);
                }

                .popup-content {
                    position: relative;
                    background-color: white;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .close-button {
                    color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                }

                .popup-header {
                    background-color: rgb(9 118 152);
                    color: white;
                    padding: 10px;
                    margin-bottom: 10px;
                }

                .popup-header p {
                    color: black;
                    font-size: 14px;
                    margin: 0;
                }

                .popup-title {
                    font-size: 24px;
                    margin: 5px 0 0 0;
                }

                @media screen and (max-width: 600px) {
                    .popup-content {
                        width: 90%;
                        margin: 20% auto;
                    }
                }
            </style>

            <p class="with-color popup-trigger">“Remote Sensing to Monitor Climate Changes”</p>

            <div id="popup" class="popup">
                <div class="popup-content">
                    <span class="close-button">&times;</span>
                    <div class="popup-header">
                        <p>טקסט כותרת בשורה ראשונה</p>
                        <h2 class="popup-title">כותרת מודגשת</h2>
                    </div>
                    <p>תוכן הפופ-אפ. כאן תוכל להוסיף את הטקסט שברצונך להציג.</p>
                </div>
            </div>
        `;

        const popupTrigger = this.shadowRoot.querySelector('.popup-trigger');
        const popup = this.shadowRoot.querySelector('#popup');
        const closeButton = this.shadowRoot.querySelector('.close-button');

        popupTrigger.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
}

customElements.define('popup-page', Popup);