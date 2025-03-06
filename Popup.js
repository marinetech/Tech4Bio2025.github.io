class Popup extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .popup-trigger {
                    cursor: pointer;
                }

                .popup {
                    display: none;
                    position: fixed;
                    z-index: 5;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(255, 255, 255, 0.4);
                }

                .popup-content {
                    position: relative;
                    background-color: white;
                    margin: 15% auto;
                    
                    border: 1px solid #888;
                    width: 50%;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .close-button {
                    color:rgb(0, 0, 0);
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                    margin-right: 10px;
                }

                .popup-header {
                    background-color: rgb(9 118 152);
                    color: white;
                    padding: 10px;

                                 }

                .popup-header p {
                    color: black;
                    font-size: 14px;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-buttom: 10px;
                }

                .popup p {
                    color: black;
                    font-size: 14px;
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-buttom: 20px;
                }

                .popup-title {
                    font-size: 24px;
                  
                      margin-left: 20px;
                    margin-right: 20px;
                    margin-buttom: 20px; 
                }
                p{
                color: black;
                }
                @media screen and (max-width: 600px) {
                    .popup-content {
                        width: 90%;
                        margin: 20% auto;
                    }
                }
            </style>

            <div id="popup" class="popup">
                <div class="popup-content">
                    <span class="close-button">&times;</span>
                    <div class="popup-header">
                        <p id="popup-sub"></p>
                        <h2 class="popup-title" id="popup-header"></h2>
                    </div>
                    <p id="popup-text"></p>
                </div>
            </div>
        `;

        this.popup = this.shadowRoot.querySelector('#popup');
        this.closeButton = this.shadowRoot.querySelector('.close-button');
        this.popupHeader = this.shadowRoot.querySelector('#popup-header');
        this.popupSub = this.shadowRoot.querySelector('#popup-sub');
        this.popupText = this.shadowRoot.querySelector('#popup-text');

        this.closeButton.addEventListener('click', () => {
            this.popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === this.popup) {
                this.popup.style.display = 'none';
            }
        });
    }

    openPopup(data) {
        this.popupHeader.textContent = data.sub;
        this.popupSub.textContent = data.header;
        this.popupText.textContent = data.text;
        this.popup.style.display = 'block';
    }

    open(data) {
        this.openPopup(data);
    }
}

customElements.define('popup-page', Popup);