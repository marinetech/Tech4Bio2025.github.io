document.addEventListener('DOMContentLoaded', function () {
    function showContent(page) {

        const homeDiv = document.getElementById('home-header'); // use querySelector for class
        const contentDiv = document.querySelector('.content'); // use querySelector for class

        if (homeDiv) {
            if (page === 'Home') {
                homeDiv.innerHTML = `
                <div class="home-header">
                    <h2>Tech4Bio 2025</h2>
                    <p>Technology to the Aid of Marine Biology</p>
                    <h3>June 25, 2025</h3>
                </div>
                `;
            } else {
                homeDiv.innerHTML = ``;
            }
        }

        if (page === 'Home') {
            document.querySelector('.background-top-demos').style.transform = 'translateY(0%)';
            document.querySelector('.content').style.top = '30%';

        } else {
            document.querySelector('.background-top-demos').style.transform = 'translateY(0%)';
            document.querySelector('.content').style.top = '30%';
        }

        if (contentDiv) {
            if (page === 'Home') {
                contentDiv.innerHTML = `<home-page></home-page>`;
            } else if (page === 'CallForAbstracts') {
                contentDiv.innerHTML = `<call-for-abstracts-page></call-for-abstracts-page>`;
            } else if (page === 'OrganizingCommittee') {
                contentDiv.innerHTML = `<organizing-committee-page></organizing-committee-page>`;
            } else if (page === 'KeynoteSpeakers') {
                contentDiv.innerHTML = `<keynote-speakers-page></keynote-speakers-page>`;
            } else if (page === 'SocialEvent') {
                contentDiv.innerHTML = `<social-event-page></social-event-page>`;
            } else if (page === 'VenueAndTraveling') {
                contentDiv.innerHTML = `<venue-and-traveling-page></venue-and-traveling-page>`;
            } else if (page === 'Demos') {
                contentDiv.innerHTML = `<demos-page></demos-page>`;
            } else if (page === 'Register') {
                contentDiv.innerHTML = `<register-page></register-page>`;
            } else if (page === 'Sponsors') {
                contentDiv.innerHTML = `<sponsors-page></sponsors-page>`;
            }
        } else {
            console.error("Content div not found.");
        }
    }
    window.showContent = showContent; // Assign function to window so html onclick can use it.
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});