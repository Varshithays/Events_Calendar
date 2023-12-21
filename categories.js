// categories.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch events from Firebase or use the existing code to display events
    const eventsRef = firebase.database().ref('events');

    // Call the function to display events initially
    displayAllEvents();

    // Function to filter events based on category
    window.filterEvents = function (category) {
        // Fetch events based on the selected category from Firebase
        eventsRef.orderByChild('category').equalTo(category).once('value')
            .then(snapshot => {
                const filteredEvents = snapshot.val();
                displayFilteredEvents(filteredEvents);
            });
    };

    // Function to display all events
    function displayAllEvents() {
        // Fetch all events from Firebase
        eventsRef.once('value')
            .then(snapshot => {
                const allEvents = snapshot.val();
                displayFilteredEvents(allEvents);
            });
    }

    // Function to display filtered events
    function displayFilteredEvents(events) {
        const filteredEventsContainer = document.getElementById('filtered-events');
        filteredEventsContainer.innerHTML = ''; // Clear existing content

        if (events) {
            for (const eventId in events) {
                const event = events[eventId];
                // Add code to display events as needed
                const eventCard = document.createElement('div');
                eventCard.className = 'card';
                eventCard.innerHTML = `
                    <h3>${event.name}</h3>
                    <p><strong>Date and Time:</strong> ${new Date(event.dateTime).toLocaleString()}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Description:</strong> ${event.description}</p>
                `;
                filteredEventsContainer.appendChild(eventCard);
            }
        } else {
            filteredEventsContainer.innerHTML = '<p>No events found for the selected category.</p>';
        }
    }
});
